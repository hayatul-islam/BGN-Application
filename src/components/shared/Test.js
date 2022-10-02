import React from "react";

import { Button } from "semantic-ui-react";

function Test() {
  return (
    <div className="py-[400px]">
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden></Button.Content>
      </Button>
      <Button animated="vertical">
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>ddd</Button.Content>
      </Button>
      <Button animated="fade">
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
      </Button>
    </div>
  );
}

export default Test;
