// import Api from './services/api';
import axio from "axios";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    cards: [],
  };
  // const [card, setCard] = useState([]);
  async componentWillMount() {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDEwOTA5ODgsImVtY" +
      "WlsIjoiZmJub2d1ZWlyYUBwcm9mZWN0dW0uY29tLmJyIiwiYXBwbGljYXRpb24iOjMw" +
      "MDA3NjY3Mn19.kJFsaS3gYkhX4ORPfidB5bl5YJCAcbvYWecKxhHuXTWky53plE4nkCNd" +
      "Zc0TYee2KuPmj9fsM2fXmPBrPeVhBA";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const baseURL = "https://api.pipefy.com/graphql";

    let cardsId = ["386750573", "386750766", "386750876"];

    for (let i = 0; i < cardsId.length; i++) {
      const response = await axio.post(
        baseURL,
        {
          query: `{
            card(id: ${cardsId[i]}) {
            title
            assignees {
              id
            }
            comments {
              text
            }
            comments_count
            current_phase {
              name
            }
            done
            due_date
            fields {
              name
              value
            }
            labels {
              name
            }
            phases_history {
              phase {
                name
              }
              firstTimeIn
              lastTimeOut
            }
            url
          }
        }`,
        },
        config
      );

      const data = response.data.data.card;
      console.log("data: ", data);

      this.setState({
        cards: [...this.state.cards, data],
      });
    }
    console.log("card:", this.state.cards);
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <h1>desafio profectum</h1>
        <ul>
          {cards.map((card) => (
            <li key={card.title}>
              <h1>{card.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
