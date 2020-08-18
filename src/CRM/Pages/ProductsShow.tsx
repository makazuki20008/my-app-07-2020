import * as React from 'react';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import axios from 'axios';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

// id, image, name, category, price, weight, datein, peopletype, location, description
export interface IDetailsListBasicExampleItem {
  id: number;
  image: string;
  name: string;
  category: string;
  price: string;
  weight: string;
  datein: string;
  peopletype: string;
  location: string;
  description: string;
}

export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
  products: string[];
}

export class DetailsListBasicExample extends React.Component<{}, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });

    // Populate with items for demos.
    this._allItems = [];
    // id, image, name, category, price, weight, datein, peopletype, location, description
    for (let i = 0; i < 200; i++) {
      this._allItems.push({
        id: i,
        image: 'string',
        name: 'Item ' + i,
        category: 'string',
        price: 'string',
        weight: 'string',
        datein: 'string',
        peopletype: 'string',
        location: 'string',
        description: 'string',
      });
    }

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
    ];

    this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
      products: []
    };
  }

  public componentDidMount() {
    axios.get('http://localhost:7071/api/products')
           .then(res => {
              const products = res.data;
              this.setState({ products: products });
              this.setState({ items: products })
              console.log(res.data);
            })
           .catch(error => console.log(error));
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
      <Fabric>
        {/* <div className={exampleChildClass}>{selectionDetails}</div> */}
        {/* <Announced message={selectionDetails} /> */}
        {/* <TextField
          className={exampleChildClass}
          label="Filter by name:"
          // onChange={this._onFilter}
          styles={textFieldStyles}
        /> */}
        {/* <Announced message={`Number of items after filter applied: ${items.length}.`} /> */}
        
        <MarqueeSelection selection={this._selection}>
          <div style={{minWidth:1000 , maxWidth: 1200, margin: 'auto'}}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="Row checkbox"
            onItemInvoked={this._onItemInvoked}
          />
          </div>
        </MarqueeSelection>
      </Fabric>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).name;
      default:
        return `${selectionCount} items selected`;
    }
  }

  private _onFilter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._allItems,
    });
  };

  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.name}`);
  };
}

export default DetailsListBasicExample;