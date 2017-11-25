import React, { Component } from "react";
import {
  Container,
  Image,
  Header,
  Grid,
  Sticky,
  Visibility,
  Menu,
  Icon,
  Segment,
  Rating,
  Divider,
  Feed
} from "semantic-ui-react";
import Picker from "./Picker";

const Wireframe = () => {
  return (
    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1">CHARMING, VERY SPACIOUS & BEST LOCATED</Header>
      <p>
        <Icon name="male" /> 8 guests <Icon name="external" /> 3 bedrooms{" "}
        <Icon name="bed" /> 0 beds <Icon name="bath" /> 2 baths
      </p>
      <p>
        Very spacious apartment located in a modernist luxury building. Only a
        10m walk to Plaza Catalunya and main sights. Fully equipped. 3 double
        bedrooms + 2 complete bathrooms + Giant living room & kitchen. Luxury
        details in a unique Barcelona style decoration.
      </p>

      <Image
        src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <Image
        src="http://1.semantic-ui.com/images/wireframe/paragraph.png"
        style={{ marginTop: "2em" }}
      />
      <RoomReview />
    </Container>
  );
};
const image =
  "https://pbs.twimg.com/profile_images/484334830864191488/ANVL8nRf_400x400.jpeg";
const date = "3 days ago";
const summary = "Laura Faucet created a post";
const extraText =
  "Have you seen what's going on in Israel? Can you believe it.";

const RoomReview = () => {
  return (
    <Segment>
      <Header>
        169 Reviews
        <Rating icon="star" defaultRating={4.5} maxRating={5} />
      </Header>
      <Divider />
      <Feed>
        <Feed.Event
          image={image}
          date={date}
          summary={summary}
          extraText={extraText}
        />

        <Feed.Event>
          <Feed.Label image={image} />
          <Feed.Content date={date} summary={summary} extraText={extraText} />
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={image} />
          <Feed.Content>
            <Feed.Date content={date} />
            <Feed.Summary content={summary} />
            <Feed.Extra text content={extraText} />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Segment>
  );
};

class Book extends Component {
  state = {
    calculations: {
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false
    }
  };

  handleContextRef = contextRef => this.setState({ contextRef });

  handleUpdate = (e, { calculations }) => this.setState({ calculations });
  render() {
    const { calculations, contextRef } = this.state;

    return (
      <div ref={this.handleContextRef}>
        <Grid columns={2}>
          <Grid.Column>
            <Visibility offset={[10, 10]} onUpdate={this.handleUpdate}>
              <Wireframe />
            </Visibility>
          </Grid.Column>
          <Grid.Column>
            <Sticky context={contextRef}>
              <Picker />
            </Sticky>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Book;
