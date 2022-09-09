import React from 'react'
import Swal from 'sweetalert2'

const FormSchool = () => {
    
    function send(){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, buy!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Bought!',
                    'Your order was sent.',
                    'success'
                )
            }
        })
       }
  return (
    <div>
         <div class="form">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">My name is:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">My phone number:</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">My email address:</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">My kid's name is:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Birthday:</label>
                    <input type="date" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">School's name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Grade</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Delivery address</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" required placeholder=""/>
                </div>
                <label>Select your days</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                         Monday
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Tuesday
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Wednesday
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Thursday
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Friday
                    </label>
                </div>


                <button class="btn btn-primary mt-2" onClick={send}>Buy</button>
            </form>
        </div>
    </div>
  )
}

export default FormSchool