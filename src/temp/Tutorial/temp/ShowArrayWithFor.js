import React from 'react';

class ShowListPhim extends React.Component {
    render() {
        const ListPhim = [{name: "Ve binh dai ngan ha", year: "2019"},{name: "Pinocchio", year: "2020"}];

        const items = []
      
        for (const [index, value] of ListPhim.entries()) {
          items.push(<li key={index}>{value.name} - {value.year}</li>)
        }

        return (
          <ul>
            {items}
          </ul>
        )
      }
      
}

export default ShowListPhim;

// su dung class de tao thanh element trong React
// class [tenclass] extends React.Component {
//  render() { return(<div></div>) }  
//}

//render items (list cac li, li mang cac gia tri cua ListPhim value(la noi dung cua phan tu trong mang mang), index(la thu tu cua phan tu trong mang))
// for (const [index, value] of ListPhim.entries())
// for (const [index,value] of ListPhim.entries()) dat bien tuong trung de chi gia tri ma mang ListPhim mang, moi phan tu trong ListPhim mang 2 gia tri, gia tri dau la index gia tri sau la value