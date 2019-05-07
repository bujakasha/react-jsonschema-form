import React from "react";
import { List, ListItem, Divider, Message } from "semantic-ui-react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div>
      <Message error>
        <div className="panel-heading">
          <h3 className="panel-title">Errors</h3>
        </div>
        <List>
          {errors.map((error, i) => {
            return (
              <ListItem key={i}>
                <span className="error">{error.stack}</span>
              </ListItem>
            );
          })}
        </List>
      </Message>
      <Divider hidden />
    </div>
  );
}
