import React from 'react'
import kids from './img/kids.png'
import red from './img/red.png'
import aqua from './img/aqua.png'
import green from './img/green.png'
 const Cards = () => {
  return (
    <div>
        <div class="tittle-products">
        <h3>Our Products</h3>
        <p>Mealtime made easy at every stage</p>
        <p>It´s fresh, baby</p>
    </div>
    <div class="cards">


        <div class="card">
            <div class="card-img">
                <img src={kids} alt="kids menu"/>
            </div>
            <div class="card-info card-color-amarillo">
                <h4>Baby food</h4> <br/>

                <p>
                    Organic, non-GMO baby food. Made fresh and cold pressed with 100+ ingredients. Built with experts
                    for every eating stage. Starting at $2.99 per blend.
                </p>
                <a href="/school">
                    <button>SHOP NOW</button>
                </a>
            </div>

        </div>

        <div class="card">
            <div class="card-img">
                <img src={red} alt="kids menu"/>
            </div>
            <div class="card-info card-color-rojo">
                <h4>Kids Meals</h4> <br/>

                <p>
                    Healthy and nutritious finger foods + meals. Made fresh with hidden veggies and superfoods in every
                    bite. Picky eater approved, ready to eat in seconds. Starting at $5.99 per plate.
                </p>
                <button>SHOP NOW</button>
            </div>

        </div>

        <div class="card">
            <div class="card-img">
                <img src={aqua} alt="kids menu"/>
            </div>
            <div class="card-info card-color-aqua">
                <h4>Smoothies</h4> <br/>

                <p>
                    100% organic smoothies with hidden veggies + superfoods. Healthy snacks for toddlers + kids with
                    ingredients parents love. Add to any order! Starting at $2.79 per smoothie.
                </p>
                <button>SHOP NOW</button>
            </div>

        </div>


        <div class="card">
            <div class="card-img">
                <img src={green} alt="kids menu"/>
            </div>
            <div class="card-info card-color-verde">
                <h4>Vitamins + Remedies</h4> <br/>

                <p>
                    All-natural vitamins and remedies to help your baby feel better, faster. Just $5.99 per pack.
                </p>
                <button>SHOP NOW</button>
            </div>

        </div>


    </div>
    </div>
  )
}
export default Cards;