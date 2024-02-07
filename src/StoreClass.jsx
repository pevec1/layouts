import React from "react";
import CardsView from "./CardsView";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";
import { products } from "./products";

class StoreClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "view_list",
      products: products,
      proj: products,
    };
  }

  handleSelectFilter(e) {
    this.setState({ proj: products.filter((el) => e === el.name) });
  }

  handleClick(icon) {
    this.setState({
      icon: icon === "view_list" ? "view_module" : "view_list",
    });
  }

  render() {
    return (
      <div>
        <IconSwitch
          icon={this.state.icon}
          onSwitch={() => this.handleClick(this.state.icon)}
        />
        {this.state.icon === "view_list" ? (
          <ListView items={this.state.products} />
        ) : (
          <CardsView cards={this.state.products} />
        )}
      </div>
    );
  }
}

export default StoreClass;
