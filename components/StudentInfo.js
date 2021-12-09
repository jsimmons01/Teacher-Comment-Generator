import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Alert, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { RadioButton } from "react-native-paper";
//import { COMMENTS } from "../comments";

/*************************************************** TO DO**************************************************************************
    *******************************Get the app working to dos******************
    *create a comment file with boy and girl pronouns seperately
    *create a component that filters through the array to match gender
    *create another component that filters through array to match student level
    *display generated comments in the text box       
    *change names of components so they make more since     
    *Actually may not need two components, but a render component that matches the gender with 
    *with the grade level     
    *Fix something, insertName is only working when put in the garde level
    *update each section to a react native element
    *fix the button
    *create a function that submits the student info input 
    *fix the radio buttons so that it's connected to state 
    *https://callstack.github.io/react-native-paper/radio-button-group.html
    
                                     
************************************Aspirations*********************************

 * eventually have subject based comments
 * style page
 * add comments to a document that teacher can send to themselves
 *

 
 *********************************************************************************************************************************/
class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      gender: "",

      //   level: "On Grade Level",
      //   text: " ",
      //   comments: COMMENTS,
    };
  }

  // insertName(comments) {
  //   this.setState({
  //     [comments]: this.state.comments.comment.replace(
  //       /StudentName/g,
  //       this.state.studentName
  //     ),
  //   });
  // }

  render() {
    return (
      <ScrollView>
        <View style={styles.formRow}>
          <Input
            style={styles.formItem}
            leftIcon={{ type: "font-awesome", name: "id-card" }}
            placeholder="Student Name"
            onChangeText={(value) => this.setState({ studentName: value })}
          />
        </View>
        {/*togglebutton raised and color when pressed, flat and outlined when nnot pressed*/}
        <View style={styles.formRow}>
          <RadioButton.Group
            onValueChange={(value) => this.setState({ gender: value })}
            value={this.state.gender}
          >
            <View>
              <Text>Boy</Text>
              <RadioButton value="boy" />
            </View>
            <View>
              <Text>Girl</Text>
              <RadioButton value="girl" />
            </View>
          </RadioButton.Group>
        </View>

        {/* <View>
            //change to select for react native
          <Label >
            Level
          </Label>
         
            <Input
              type="select"
              id="level"
              name="level"
              value={this.state.level}
              onChange={this.handleInputChange}
            >
              <option>Below Grade Level</option>
              <option>On Grade Level</option>
              <option>Above Grade Level</option>
            </Input>
         
        </View> */}
        <View style={styles.formRow}>
          <Button
            style={styles.formItem}
            title="Submit"
            onPress={() =>
              Alert.alert(
                "Student Information Received",
                "Student Name: " +
                  this.state.studentName +
                  "\n" +
                  "Gender: " +
                  this.state.gender +
                  "\n",
                [
                  {
                    text: "OK",
                  },
                ]
              )
            }
          />
        </View>
        {/* <View>
        //text input or just a view ?
          <Input >
            {this.state.comments.comment}
          </Input>
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },

  formItem: {
    flex: 1,
  },
  formGenderButton: {
    backgroundColor: "darkgray",
    padding: 10,
    margin: 10,
  },
  formRadioTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StudentInfo;
