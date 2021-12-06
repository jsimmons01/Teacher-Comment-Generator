import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
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
      selectedGender: "",

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
        <View>
          <Button
            title="Boy"
            onPress={
              (() => this.setState({ selectedGender: "Boy" }),
              console.log(this.state))
            }
          />
          <Button
            title="Girl"
            onPress={
              (() => this.setState({ selectedGender: "Girl" }),
              console.log(this.state))
            }
          />
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
        <View>
          <Button title="Submit" />
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
  formRadioTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  genderButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default StudentInfo;
