//MODIFICAR CAMPOS EN DB
import { API } from "aws-amplify";
import { updateUser } from "../graphql/mutations";

export const updateUserDate = async (userID, date) => {
    try {
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: userID,
            date: newDate,
          },
        },
      });
      console.log("date updated");
    } catch (e) {
      console.log("error updating ");
    }
  };
  
  export const updateUserAge = async (userID, age) => {
    try {
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: userID,
            age: newAge,
          },
        },
      });
      console.log("user age updated");
    } catch (e) {
      console.log("error updating user age");
    }
  };
  
  //MODIFICAR LOCALIDAD
  export const updateUserLocation = async (userID, location) => {
    try {
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: userID,
            location: location,
          },
        },
      });
      console.log("user location updated");
    } catch (e) {
      console.log("error updating user location");
    }
  };