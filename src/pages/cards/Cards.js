import axios from 'axios';
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { getCards, deleteCard } from "../../actions/cardsActions";
import CardsTable from '../../components/UI/cards-table/CardsTable'
import './Cards.css'


const Cards = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  console.log("cards",cards);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

 const delCard = (id) => {
   deleteCard(id);
   console.log("clicked")
   getCards();
  }
    return (
        <div class="main">
        <div class="container">
          <div class="container">
            <div class="container my-5">
              <h6 class="cardsheader ml-3 mb-5">Cards</h6>
              <button class="btn btn-sm card-side-btn mr-2">New Physical Card</button>
              <button class="btn btn-sm card-side-btn">New Virtual Card</button>
            </div>
      
            {/* <div class="container cards-nav">
              <span class="vir-cards">Virtual Cards</span>
              <span class="physical-cards">Physical Cards</span>
            </div> */}
            {/* <div class="form-group col-2 text-left  ml-2">
              <input
                type="search"
                class="form-control form-control-sm"
                placeholder="Search"
                name="search"
               
              />
            </div> */}
            <CardsTable cards={cards} delCard={delCard}/>
          </div>
        </div>
      </div>
      
    )
}

const mapStateToProps = (state) => ({
  cards: state.cards,
});
export default connect(mapStateToProps, { getCards, deleteCard })(Cards);
