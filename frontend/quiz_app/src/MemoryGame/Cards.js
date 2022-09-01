import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import React from "react";
import swal from "@sweetalert/with-react";

function Cards() {
  React.useEffect(() => {
    //   console.log("ispod");
    getData();
    //   console.log("iznad");
    items.sort(() => Math.random() - 0.5);
    console.log(items);
  }, []);

  async function getData() {
    let map = [1, 3, 5, 7, 9, 11, 13, 15];
    map.map((num) => {
      axios
        .get("https://en.wikipedia.org/api/rest_v1/page/random/summary")
        .then((res) => {
          if (items.length >= 16) {
            return;
          }
          const thumbnail = res.data.thumbnail.source;
          const page = res.data.content_urls.desktop.page;
          const summary = res.data.extract;
          const title = res.data.title;
          const item = {
            id: num,
            img: thumbnail,
            stat: "",
            summary: summary,
            page: page,
            title: title,
          };
          items.push(item);
          num++;
          const item2 = {
            id: num,
            img: thumbnail,
            stat: "",
            summary: summary,
            page: page,
            title: title,
          };
          items.push(item2);
        });
    });
  }
  const [items, setItems] = useState([]);
  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (
      (items[current].id === 1 && items[prev].id === 2) ||
      (items[current].id === 2 && items[prev].id === 1)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else if (
      (items[current].id === 3 && items[prev].id === 4) ||
      (items[current].id === 4 && items[prev].id === 3)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else if (
      (items[current].id === 5 && items[prev].id === 6) ||
      (items[current].id === 6 && items[prev].id === 5)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else if (
      (items[current].id === 7 && items[prev].id === 8) ||
      (items[current].id === 8 && items[prev].id === 7)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else if (
      (items[current].id === 9 && items[prev].id === 10) ||
      (items[current].id === 10 && items[prev].id === 9)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else if (
      (items[current].id === 11 && items[prev].id === 12) ||
      (items[current].id === 12 && items[prev].id === 11)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else if (
      (items[current].id === 13 && items[prev].id === 14) ||
      (items[current].id === 14 && items[prev].id === 13)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else if (
      (items[current].id === 15 && items[prev].id === 16) ||
      (items[current].id === 16 && items[prev].id === 15)
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      swal(
        <div>
          <h1 className="text-dark">{items[current].title}</h1>
          <p className="text-dark">{items[current].summary}</p>
          <img src={items[current].img}></img>
        </div>
      );
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        console.log("sad je stat");
        console.log(items[current].stat);
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      //   setItems([...items])
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <>
      <div className="containerM">
        {items !== undefined &&
          items.map((item, index) => (
            <Card
              className="cardM"
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          ))}
      </div>
      {/* {(items !== null && checkIfSolved()) && <h1>PROBAAAA {items[5].img}</h1>} */}
    </>
  );
}

export default Cards;
