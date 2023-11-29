const Reservation = require('../Schemas/reservationSchema');


  exports.createNewReservation = async (req, res) => {
    const { accommodation, checkin, checkout } = req.body;
    const { _id: user } = req.userData
    console.log("REQ BODY", req.body,)
    if(!user || !accommodation || !checkin || !checkout) {
      res.status(400).json({
        message: 'You need to enter all the fields'
      })
      return
    } 
    try {
      const newReservation = await Reservation.create({ user, accommodation, checkin, checkout })
      await newReservation.populate("accommodation")
      
      res.status(201).json(newReservation)
    }
    catch(error) {
        console.log("Error in creation of reservation", error)
        res.status(500).json({ message: 'Someting went wrong when adding the reservation'})
    }
  }



exports.getReservations = (req, res) => {

  Reservation.find()
    .then(reservations => {
      res.status(200).json(reservations)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Could not get the reservations'
      })
    })
}

exports.getUserReservations = (req, res) => {
  const { _id, } = req.userData;
  //TODO get all reservations based on user
  Reservation.find({ user: _id })
  .populate('accommodation')
  .then(reservations => {
    res.status(200).json(reservations)
  })
  .catch(error => {
    console.log("ERROR: getting user reservations", error)
    res.status(500).json({
      message: "Could not get user reservations"
    })
  })
  
}



exports.getReservationById = (req, res) => {

  Reservation.findById(req.params.id)
    .then(reservation => {
      if(!reservation) {
        res.status(404).json({ message: 'could not find that reservation'})
        return
      }

      res.status(200).json( reservation ) 
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong'
      })
    })
  }



exports.updateReservation = (req, res) => {

  Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(reservation => {
      if(!reservation) {
        res.status(404).json({ message: 'could not find that reservation'})
        return
      }

      res.status(200).json(reservation)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when updating the reservation'
      })
    })

}



exports.deleteReservation = (req, res) => {

  Reservation.findByIdAndDelete(req.params.id)
    .then(reservation => {
      if(!reservation) {
        res.status(404).json({ message: 'could not find that reservation'})
        return
      }

      res.status(200).json({ id: reservation._id })
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when deleteing the reservation'
      })
    })
}