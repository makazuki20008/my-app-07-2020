import React from "react";

class ChildDFC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datafromchild: "dfc",
    };
  }

  componentDidMount() {
    this.props.data(this.state.datafromchild);
  }

  render() {
    return <div>Child</div>;
  }
}

class ChildToParentData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: "",
    };
  }
  // sử dụng e để lấy dữ liệu
  data = (e) => {
    this.setState({ childData: e });
  };
  render() {
    return (
      <div>
        child to parent
        <ChildDFC data={this.data}></ChildDFC>
        {this.state.childData}
      </div>
    );
  }
}

export default ChildToParentData;

// ở parent
// ta gọi child
// child chứa 1 attribute (attribute này chính là nơi parent lấy dữ liệu)
// giá trị attribute là 1 phương thức
// phương thức này gọi đến giá trị thự tại của phương thức (e)
// (e) giá trị thực tại chính là giá trị mà attribute mang

// ở con
// set dữ liệu cho attribute bằng cách this.props.tên_attr(dữ_liệu)
