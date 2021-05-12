import React from 'react'
import CardsTable from '../../UI/cards-table/CardsTable'
import './Cards.css'

const Cards = () => {
    return (
        <div class="main">
        <div class="container">
          <div class="container">
            <div class="container my-5">
              <h6 class="cardsheader ml-1">Cards</h6>
              <button class="btn btn-sm card-side-btn mr-2">New Physical Card</button>
              <button class="btn btn-sm card-side-btn">New Virtual Card</button>
            </div>
      
            <div class="container cards-nav">
              <span class="vir-cards">Virtual Cards</span>
              <span class="physical-cards">Physical Cards</span>
            </div>
            <div class="form-group col-2 text-left">
              <input
                type="search"
                class="form-control form-control-sm"
                placeholder="Search"
                name="search"
               
              />
            </div>
            <CardsTable/>
          </div>
        </div>
      </div>
      
    )
}

export default Cards
