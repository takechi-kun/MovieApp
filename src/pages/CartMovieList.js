import React from "react";
import {
  TypographySumList,
  TypographyCash,
} from "../components/Typography/typography_detail";
import ModalDisplay from "../components/Modal/Modal";
function CartMovieList() {
  const allList = localStorage.getItem("lists");
  const all_movie = JSON.parse(allList);

  function CashCheck() {
    let cash = 100 * all_movie.length;
    if (all_movie.length > 3 && all_movie.length < 5) {
      cash = cash - (cash * (15 / 100));
    }
    if (all_movie.length > 5) {
      cash = cash - (cash * (20 / 100));
    }
    return cash;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 150,
      }}
    >
      {allList !== null ? (
        <>
          {" "}
          <TypographySumList>
            {`คุณมียอดรายการทั้งหมด ${all_movie.length} รายการ`}
          </TypographySumList>
          <TypographyCash>{`รวมทั้งสิ้น ${CashCheck()} บาท`}</TypographyCash>
          <ModalDisplay />
        </>
      ) : (
        <TypographySumList>
        {`คุณไม่มียอดรายการนะขณะนี้`}
      </TypographySumList>
      )}
    </div>
  );
}

export default CartMovieList;
