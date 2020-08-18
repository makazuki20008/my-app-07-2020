import * as React from 'react';
import { createListItems, IExampleItem } from '@uifabric/example-data';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { DetailsList, buildColumns, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import axios from 'axios'; // nhận dữ liệu từ host đã mở cor
import { DefaultButton  } from 'office-ui-fabric-react'; // button
import ModalEditProduct from './ProductsEditModal';

import { CompoundButton } from 'office-ui-fabric-react';

import { IContextualMenuProps, Stack, IStackTokens } from 'office-ui-fabric-react';

import { CommandButton, ActionButton, IIconProps } from 'office-ui-fabric-react';

// chưa thay đổi được giao diện khi delete item
// đã sử dụng setState({ products: this.state.products.splice(item.id, 1) }) lỗi
// đang áp model vào để sử dụng

// add vào React.Component<{},> để khai báo state cho component
export interface IDetailsListCustomColumnsExampleState {
  sortedItems: IExampleItem[];
  columns: IColumn[];
}

const stackTokens: IStackTokens = { childrenGap: 5 };

const regionProps: IContextualMenuProps = {
  items: [
    {
      key: 'KH',
      text: 'Khánh Hòa',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'HCM',
      text: 'TP. Hồ Chí Minh',
      iconProps: { iconName: 'Calendar' },
    },
    {
      key: 'HN',
      text: 'Hà Nội',
      iconProps: { iconName: 'Calendar' },
    },
    {
      key: 'HP',
      text: 'Hải Phòng',
      iconProps: { iconName: 'Calendar' },
    },
    {
      key: 'SL',
      text: 'Sơn La',
      iconProps: { iconName: 'Waffle' },
    },
  ],
};

const branchProps: IContextualMenuProps = {
  items: [
    {
      key: 'lvk',
      text: 'Lương Văn Kiên',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'hsm',
      text: 'Hoàng Smart',
      iconProps: { iconName: 'EditNote' },
    },
    {
      key: 'cod',
      text: 'Condok',
      iconProps: { iconName: 'Calendar' },
    },
  ],
};

const addIcon: IIconProps = { iconName: 'Add' };
const addFriendIcon: IIconProps = { iconName: 'AddFriend' };

const menuProps: IContextualMenuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
  // By default, the menu will be focused when it opens. Uncomment the next line to prevent this.
  // shouldFocusOnMount: false
};

export class DetailsListCustomColumnsExample extends React.Component<{}, IDetailsListCustomColumnsExampleState> { 
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    // Các cột hiển thị
    // Nếu dữ liệu có trường trùng với fieldName, dữ liệu sẽ được in ra tại fieldName
    // id, image, name, category, price, weight, datein, peopletype, location, description
    this._columns = [
        { key: 'column1', name: 'Id', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Image', fieldName: 'image', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Category', fieldName: 'category', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column5', name: 'Price', fieldName: 'price', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column6', name: 'Weight', fieldName: 'weight', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column7', name: 'DateIn', fieldName: 'datein', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column8', name: 'PeopleType', fieldName: 'peopletype', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column9', name: 'Location', fieldName: 'location', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column10', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column11', name: 'Edit', fieldName: 'edit', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column12', name: 'Delete', fieldName: 'delete', minWidth: 100, maxWidth: 200, isResizable: true },
      ];

    const items = createListItems(500);
    this.state = {
      sortedItems: items,
      columns: _buildColumns(items),
    };
  }

  // componentDidMount
  public componentDidMount() {
    axios.get('http://localhost:7071/api/products')
           .then(res => {
              const products = res.data;
              this.setState({ sortedItems: products })
              // console.log(res.data);
            })
           .catch(error => console.log(error));
  }

  public render() {
    const { sortedItems, columns } = this.state;

    return (
      <div>

        <div>
          <CompoundButton secondaryText="This is the secondary text." style={{margin: 10}}>
            Cửa hàng
          </CompoundButton>
          <CompoundButton secondaryText="This is the secondary text." style={{margin: 10}}>
            Tồn kho
          </CompoundButton>
          <CompoundButton secondaryText="This is the secondary text." style={{margin: 10}}>
            Mới nhập
          </CompoundButton>
          <CompoundButton secondaryText="This is the secondary text." style={{margin: 10}}>
            Đổi trả
          </CompoundButton>
          <CompoundButton secondaryText="This is the secondary text." style={{margin: 10}}>
            Hàng cũ
          </CompoundButton>
          <CompoundButton secondaryText="This is the secondary text." style={{margin: 10}}>
            On sale
          </CompoundButton>
          
          <CompoundButton primary secondaryText="This is the secondary text." style={{margin: 10}}>
            Đã bán
          </CompoundButton>
        </div>

        <Stack horizontal wrap tokens={stackTokens} style={{marginLeft:10,float:'left'}}>
          <DefaultButton
            text="Khu vực"
            primary
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={regionProps}
            onClick={_alertClicked}
          />
          <DefaultButton
            text="Chi nhánh"
            split
            splitButtonAriaLabel="See 2 options"
            aria-roledescription="split button"
            menuProps={branchProps}
            onClick={_alertClicked}
          />
        </Stack>

        <Stack horizontal wrap tokens={stackTokens} style={{marginLeft:10,float:'left'}}>
          <div style={{float:'left',width:500,height:10}}></div>
          <CommandButton iconProps={addIcon} text="New item" menuProps={menuProps}  />
          <ActionButton iconProps={addFriendIcon} allowDisabledFocus >
            Create account
          </ActionButton>
          <ActionButton iconProps={addFriendIcon} allowDisabledFocus >
            Create account
          </ActionButton>
          <CommandButton iconProps={addIcon} text="New item" menuProps={menuProps}  />
          <CommandButton iconProps={addIcon} text="New item" menuProps={menuProps}  />
        </Stack>

        <div style={{width:100,height:50}}></div>

        <DetailsList
          items={sortedItems}
          setKey="set"
          columns={this._columns}
          onActiveItemChanged={this._onAICChange}
          onRenderItemColumn={_renderItemColumn}
          onColumnHeaderClick={this._onColumnClick}
          onItemInvoked={this._onItemInvoked}
          onColumnHeaderContextMenu={this._onColumnHeaderContextMenu}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="Row checkbox"

          // // dữ liệu mà DetailsList nhận
          // items={sortedItems}
          // setKey="set"
          // // những cột mà DetailsList có 
          // // ở đây gồm 'id', 'image', 'name', 'category', 'price', 'weight', 'datein', 'peopletype', 'location', 'description', 'edit', 'delete'
          // columns={this._columns}
          // onActiveItemChanged={this._onAICChange}
          // onRenderItemColumn={_renderItemColumn}
          // onColumnHeaderClick={this._onColumnClick}
          // // Sự kiện khi click chọn một hàng trong DetailsList
          // onItemInvoked={this._onItemInvoked}
          // onColumnHeaderContextMenu={this._onColumnHeaderContextMenu}
          // ariaLabelForSelectionColumn="Toggle selection"
          // ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          // checkButtonAriaLabel="Row checkbox"
        />
        <ModalEditProduct></ModalEditProduct>
        <br/><br/><br/><br/><br/><br/><br/> {/* footer above list */}
      </div>
    );
  }
  private _onAICChange(e):void {
    // console.log(e.id); // id of select row
    
  }
  private _onColumnClick = (event: React.MouseEvent<HTMLElement>, column: IColumn): void => {
    const { columns } = this.state;
    let { sortedItems } = this.state;
    let isSortedDescending = column.isSortedDescending;

    // If we've sorted this column, flip it.
    // thay đổi giá trị của biến isSortedDesscending để thông báo loại sắp xếp
    if (column.isSorted) {
      isSortedDescending = !isSortedDescending;
    }

    // Sort the items.
    // Sắp xếp thứ tự của các hàng dữ liệu
    sortedItems = _copyAndSort(sortedItems, column.fieldName!, isSortedDescending);


    // Reset the items and columns to match the state.
    this.setState({
      sortedItems: sortedItems,
      columns: columns.map(col => {
        col.isSorted = col.key === column.key;

        if (col.isSorted) {
          col.isSortedDescending = isSortedDescending;
        }

        return col;
      }),
    });
  };

  private _onColumnHeaderContextMenu(column: IColumn | undefined, ev: React.MouseEvent<HTMLElement> | undefined): void {
    console.log(`column ${column!.key} contextmenu opened.`);
  }

  private _onItemInvoked(item: any, index: number | undefined): void {
    // alert(`Item ${item.name} at index ${index} has been invoked. ${item.id}`);
    
    // gui den chuc nang delete id
    // ProductDeleteWithID($item.id); // sql delete // ui delete
    // sql delete // axios(http:localhost:4000/product/item.id, method: delete).error catch
    // ui delete state items = ...state, splice(item.id)

    //axios.delete(`http://localhost:7071/api/products/${item.id}`).then().catch(error => console.log(error));
    // this.setState({ sortedItems: this.state.sortedItems.splice(item.id, 1) });

    //_alertDeleteClicked(item.id);
  }
}

function _buildColumns(items: IExampleItem[]): IColumn[] {
  // buildColums(items) là hàm chứa trong thư viện có tác dụng là xây dựng columns theo dữ liệu items
  const columns = buildColumns(items);

  const thumbnailColumn = columns.filter(column => column.name === 'thumbnail')[0];

  // Special case one column's definition.
  thumbnailColumn.name = '';
  thumbnailColumn.maxWidth = 50;
  thumbnailColumn.ariaLabel = 'Thumbnail';

  return columns;
}

// Hàm này sẽ áp vào attribute onRenderItemColumn của DetailsList
// Thay đổi cấu trúc hiển thị của từng trường
function _renderItemColumn(item: IExampleItem, index: number, column: IColumn) {
  const fieldContent = item[column.fieldName as keyof IExampleItem] as string;

  switch (column.key) {
    case 'column2':
        return <Image src={fieldContent} width={100} height={100} imageFit={ImageFit.cover} />;
    case 'column11':
        return <DefaultButton text="Edit" onClick={_alertClicked} value="vedit" allowDisabledFocus />;
    case 'column12':
        return <DefaultButton text="Delete" data-selection-invoke={true} value="1" allowDisabledFocus />;
    // case 'column12':
    //   return <Link data-selection-invoke={true}>{"Edit"}</Link>;

    case 'thumbnail':
      return <Image src={fieldContent} width={50} height={50} imageFit={ImageFit.cover} />;

    case 'name':
      return <Link href="#">{fieldContent}</Link>;

    case 'color':
      return (
        <span
          data-selection-disabled={true}
          className={mergeStyles({ color: fieldContent, height: '100%', display: 'block' })}
        >
          {fieldContent}
        </span>
      );

    default:
      return <span>{fieldContent}</span>;
  }
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
  const key = columnKey as keyof T;
  return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

function _alertClicked(e): void {
    console.log(e);
  }

function _alertDeleteClicked(itemId): void {
  alert('Deleted' + itemId);
}

export default DetailsListCustomColumnsExample;