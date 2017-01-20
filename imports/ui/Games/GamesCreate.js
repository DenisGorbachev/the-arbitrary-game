import React from "react";
import {Redirect} from "react-router";
import {Header} from "semantic-ui-react";
import AutoForm from "uniforms-semantic/AutoForm";
import SubmitField from "uniforms-semantic/SubmitField";
import {GamesCreateSchema} from "/imports/api/Games/GamesSchema";
import {GamesInsert} from "/imports/api/Games/GamesMethods";

export class GamesCreateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectTo: ""
    };
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    return (
      <div>
        <Header as="h1">{'Новая игра'}</Header>
        <AutoForm
          schema={GamesCreateSchema}
          submitField={() => <SubmitField className="primary" />}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }

  onSubmit(game) {
    // TODO: https://trello.com/c/zOcfeLOd/13-implement-loading-state-for-gamescreate-form
    const _id = GamesInsert.call(game);
    this.setState({redirectTo: '/games'})
  }
}

export default GamesCreateComponent;