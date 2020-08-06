// sử dụng khi ta có dữ liệu các props, data mẫu
// muốn áp các props, data mẫu cho các component khác nhau
// ta sử dụng HigherOrderComponent
import React from 'react';

// HOC, thùng chứa các dữ liệu
const withSecretToLife = (TenMauThungChua) => {
    class HOC extends React.Component {
      render() {
        return (
          <TenMauThungChua
            {...this.props}
            secretThing={42}
          />
        );
      }
    }
      
    return HOC;
};

// 1 component đơn lẻ 1
const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretThing}.
  </div>
);

// 1 component đơn lẻ 2
const DisplayTheSecret2 = props => (
    <div>
      Number secret my is {props.secretThing}.
    </div>
  );

// áp dữ liệu từ thùng chứa vào cho component
const WrappedComponent = withSecretToLife(DisplayTheSecret);
const WrappedComponent2 = withSecretToLife(DisplayTheSecret2);

const HOCViewer = () => (<div><WrappedComponent></WrappedComponent><WrappedComponent2></WrappedComponent2></div>);

export default HOCViewer;