import { Comment, Avatar, Form, Button, List, Input } from "antd";
import React from "react";
import "../components/styles/productComment.css";
const { TextArea } = Input;
const localUser = JSON.parse(localStorage.getItem("localUser"));

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    // header={`${comments.length} ${comments.length > 1 ? "پەیام" : "پەیام"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    {localUser && (
      <>
        <Form.Item>
          <TextArea rows={4} onChange={onChange} value={value} placeholder="پەیامەکەت لێرە بنووسە..."/>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={submitting}
            onClick={onSubmit}
            // type="primary"
            // style={{
            //   background: "var(--colorMain1)",
            //   color: "var(--colorWhite)",
            //   borderRadius: "10px",
            // }}
          >
            پەیامێک جێبێڵە
          </Button>
        </Form.Item>
      </>
    )}
  </>
);

class App extends React.Component {
  state = {
    comments: [
      {
        author: "ئارام کاوە",
        avatar: "https://joeschmoe.io/api/v1/male/random",
        content: <p>بەرهەمێکی زۆر ناوازەیە</p>,
        datetime: "کاتژمێرێک لەمەوبەر",
      },
      {
        author: "سۆلین ئاری",
        avatar: "https://joeschmoe.io/api/v1/female/random",
        content: <p>دەستان خۆشبێت زۆر جوانە</p>,
        datetime: "5 خولەک لەمەوبەر",
      },
    ],
    submitting: false,
    value: "",
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          ...this.state.comments,

          {
            author: localUser.firstName + " " + localUser.lastName,
            avatar: localUser.image,
            content: <p>{this.state.value}</p>,
            datetime: "هەر ئێستا",
            // datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            localUser && (
              <Avatar src={localUser?.image} alt={localUser.username} />
            )
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}

export default App;
