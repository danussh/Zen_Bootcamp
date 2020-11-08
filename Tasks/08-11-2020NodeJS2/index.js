const { request } = require("express");

const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
app.listen(port, ()=>`The app is running on port: ${port}`);
app.use(express.json());

rooms = [
    {
        RoomsAvailable : 5,
        Ammenities : ['TV', 'Fridge'],
        PricePerHour : 100,
        BookedRoomID : [1, 2],
        UnBookedRoomID : [3, 4, 5]
    }
]

bookingDetails = [
    {
        CustomerName : "Koushik K",
        Booking_StartDate : "2011-05-26T07:56:00.123Z",
        Booking_EndDate : "2011-05-27T07:56:00.123Z",
        RoomID : 1
    },
    {
        CustomerName : "Koushik K",
        Booking_StartDate : "2012-05-26T07:56:00.123Z",
        Booking_EndDate : "2012-05-27T07:56:00.123Z",
        RoomID : 2
    }
]

customers = ["Koushik K"]

let roomID = 5;

app.post("/add-room", (req, res)=>{
    let room = req.body;
    let roomIds = [];
    for(let i=0; i<room.RoomsAvailable; i++){
        roomIds.push(++roomID)
    }
    room["UnBookedRoomID"] = roomIds
    room["BookedRoomID"] = []
    rooms.push(room)
    res.status(200).json({
        msg : "Rooms added successfully",
        data : rooms
    })
})

app.post("/book-room", (req, res)=>{
    let bookingObject = req.body;
    let isAvailable = false;
    let isTimeOut = true;
    let customerName = bookingObject.CustomerName;
    for (let i=0; i<rooms.length; i++){
        if (rooms[i].UnBookedRoomID.includes(bookingObject.RoomID)){
            isAvailable = true;
            if (customers.includes(bookingObject.CustomerName)){
                let customerBookingDetails = bookingDetails.filter(function(item) { 
                    return item.CustomerName === customerName;  
                 });
                
                let currentEndDate = new Date(customerBookingDetails[0].Booking_EndDate)
                let bookingObject = customerBookingDetails[0]
                for (let j = 1 ; j<customerBookingDetails.length; j++){
                    if (new Date(customerBookingDetails[j].Booking_EndDate) > currentEndDate){
                        bookingObject = customerBookingDetails[j]
                        currentEndDate = new Date(customerBookingDetails[j].Booking_EndDate)
                    }
                }
                currentEndDate.setHours(currentEndDate.getHours() + 1)
                let bookingStartDate = new Date(bookingObject.Booking_StartDate)
                if(bookingStartDate <= currentEndDate){
                    isTimeOut = false;
                    break
                }
                

            }
            else{
                customers.push(bookingObject.CustomerName)
            }
            let roomIds = []
            for(let j=0; j<rooms[i].UnBookedRoomID.length; j++){
                if (rooms[i].UnBookedRoomID[j] !== bookingObject.RoomID){
                    roomIds.push(rooms[i].UnBookedRoomID[j])
                }
            }
            rooms[i].UnBookedRoomID= roomIds
            rooms[i].BookedRoomID.push(bookingObject.RoomID)
            bookingDetails.push(bookingObject)
        }
    }

    if (isAvailable && isTimeOut){
        res.status(200).json({
            msg : "Room booked successfully",
            data : bookingObject
        })
    }
    
    else if (isTimeOut){
        res.status(400).json({
            msg:"Room requested is not available"
        })
    }

    else{
        res.status(400).json({
            msg:"Another request is pending. Please choose different start date"
        })
    }
})

app.get("/room-details", (req, res)=>{
    let roomDetails = []
    for (let i=0; i<rooms.length; i++){
        for(let j=0; j<rooms[i].UnBookedRoomID.length; j++){
            let object = {}
            object["Room Name"] =  rooms[i].UnBookedRoomID[j]
            object["Booked Status"] = "Available"
            object["Customer Name"] = "NA"
            object["Start Time"] = "NA"
            object["End TIme"] = "NA"
            roomDetails.push(object)
        }

        for(let j=0; j<rooms[i].BookedRoomID.length; j++){
            let object = {}
            object["Room Name"] =  rooms[i].BookedRoomID[j]
            object["Booked Status"] = "Booked"
            let roomBookingDetails = bookingDetails.filter(function(item) { 
                return item.RoomID === rooms[i].BookedRoomID[j];  
             });
            let currentEndDate = new Date(roomBookingDetails[0].Booking_EndDate)
            let bookingObject = roomBookingDetails[0]
            for (let k = 1 ; k<roomBookingDetails.length; k++){
                if (new Date(roomBookingDetails[j].Booking_EndDate) > currentEndDate){
                    bookingObject = roomBookingDetails[k]
                    currentEndDate = new Date(roomBookingDetails[k].Booking_EndDate)
                }
            }

            object["Customer Name"] = bookingObject.CustomerName
            object["Start Time"] = bookingObject.Booking_StartDate
            object["End TIme"] = bookingObject.Booking_EndDate
            roomDetails.push(object)
        }


    }
    res.status(200).json({
        msg : "All rooms data",
        data: roomDetails
    })

})

app.get("/customer-details", (req, res)=>{
    let customerDetails = []
    for (let i=0; i<customers.length; i++){
        let customerBookingDetails = bookingDetails.filter(function(item) { 
            return item.CustomerName === customers[i];  
         });
        let currentEndDate = new Date(customerBookingDetails[0].Booking_EndDate)
        let bookingObject = customerBookingDetails[0]
        for (let j = 1 ; j<customerBookingDetails.length; j++){
            if (new Date(customerBookingDetails[j].Booking_EndDate) > currentEndDate){
                bookingObject = customerBookingDetails[j]
                currentEndDate = new Date(customerBookingDetails[j].Booking_EndDate)
            }
        }

        let object = {}
        object["Customer Name"] = customers[i]
        object["Room Name"] =  bookingObject.RoomID
        object["Start Time"] = bookingObject.Booking_StartDate
        object["End TIme"] = bookingObject.Booking_EndDate
        customerDetails.push(object)

    }

    res.status(200).json({
        msg : "All customers data",
        data: customerDetails
    })

})