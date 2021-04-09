// V 0.0.1

import React, { Component } from "react";


import * as Survey from "survey-react";



import "survey-react/survey.css";
import "./index.css";

Survey.StylesManager.applyTheme("orange");

class SurveyComponent extends Component {
    constructor() {
        super();
        
    }
    render() {
        

        

        const json = {
  "title": "CS4800 Draft Project | Site for suspected and probable cases of COVID-19",


  "pages": [

    //Page 0 - Patient info
    {
      "name": "page0",
      "navigationTitle": "Patient",
      "navigationDescription": "Patient info",
      "elements": [
        /*
        {
          "type": "image",
          "name": "first_page_image",
          "imageLink": "/Users/rene/Desktop/Project/main/Images/01.png",
          "imageFit": "none",
          "imageHeight": 726,
          "imageWidth": 500,
          "width": "600px"
        },
        
        {
          "type": "panel",
          "name": "first_page_container_panel",
          "elements": [
            {
              "type": "text",
              "name": "unique_case_id_textbox",
              "startWithNewLine": false,
              "title": "Unique Case ID / Cluster Number (if applicable):",
              "inputType": "number",
              "hideNumber": true
            },
            {
              "type": "panel",
              "name": "current_status_panel",
              "elements": [
                {
                  "type": "boolean",
                  "name": "current_status",
                  "titleLocation": "hidden",
                  "labelTrue": "Alive",
                  "labelFalse": "Dead",
                  "hideNumber": true
                }
              ],
              "title": "Current Status",
              "showNumber": true
            },
            {
              "type": "panel",
              "name": "data_collector_information",
              "elements": [
                {
                  "type": "text",
                  "name": "name_of_data_collector",
                  "title": "Name of data collector"
                },
                {
                  "type": "text",
                  "name": "data_collector_institution",
                  "title": "Data collector Institution"
                },
                {
                  "type": "text",
                  "name": "data_collector_telephone_number",
                  "title": "Data collector telephone number",
                  "inputType": "tel"
                },
                {
                  "type": "text",
                  "name": "email",
                  "title": "Email",
                  "inputType": "email"
                },
                {
                  "type": "text",
                  "name": "form_completion_date",
                  "title": "Form completion date",
                  "inputType": "date"
                }
              ],
              "title": "Data Collector Information",
              "showNumber": true,
              "showQuestionNumbers": "off"
            }
            */
      {
          "type": "panel",
          "name": "case_identifier_information ",
          "elements": [
            {
              "type": "text",
              "name": "first_names",
              "title": "First name",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "last_name",
              "startWithNewLine": false,
              "title": "Last name",
              "isRequired": true
            },
            {
              "type": "radiogroup",
              "name": "case_identifier_information_sex",
              "startWithNewLine": false,
              "title": "Sex",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Male"
                },
                {
                  "value": "item2",
                  "text": "Female"
                },
                {
                  "value": "item3",
                  "text": "Other/Not known"
                }
              ],
              "colCount": 3
            },
            {
              "type": "panel",
              "name": "case_identifier_information_patient_date_of_birth_panel",
              "elements": [
                {
                  "type": "text",
                  "name": "case_identifier_information_patient_date_of_birth_date",
                  "visibleIf": "{case_identifier_information_patient_date_of_birth_checkbox} empty",
                  "titleLocation": "hidden",
                  "inputType": "date",
                  "isRequired": true
                },

                /*
                {
                  "type": "checkbox",
                  "name": "case_identifier_information_patient_date_of_birth_checkbox",
                  "startWithNewLine": false,
                  "titleLocation": "hidden",
                  "choices": [
                    "Unknown"
                  ]
                }
                */
              ],
              "title": "Date of Birth"
            },
            // Phone # Snippet
            /*
            {
              "type": "text",
              "name": "case_identifier_information_patient_telephone_mobile_number",
              "title": "Telephone (mobile) number",
              "inputType": "tel"
            },
            */

            {
              "type": "panel",
              "name": "case_identifier_information_patient_age",
              "elements": [
                {
                  "type": "text",
                  "name": "case_identifier_information_patient_age_years",
                  "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
                  "title": "Years:",
                  "titleLocation": "left",
                  "inputType": "number",
                  "isRequired": true
                },
                {
                  "type": "text",
                  "name": "case_identifier_information_patient_age_months",
                  "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
                  "startWithNewLine": false,
                  "title": "Months:",
                  "titleLocation": "left",
                  "inputType": "number",
                  "isRequired": true,
                },

                /*
                {
                  "type": "checkbox",
                  "name": "case_identifier_information_patient_age_checkbox",
                  "startWithNewLine": false,
                  "titleLocation": "hidden",
                  "choices": [
                    "Unknown"
                  ]
                }
                */
              ],
              "title": "Age (years, months) "
            },

            // Race/Ethnicity snippet
            {
              "type": "dropdown",
              "name": "case_identifier_information_patient_race",
              "title": "What is your race/ethnicity?",
              "isRequired": true,
              "choices": [
                "American Indian or Alaska Native",
                "Asian",
                "Black or African American",
                "Hispanic",
                "Native Hawaiian or Other Pacific Islander",
                "Non-Hispanic White",
                "Other"
              ],
              // Choice by url
              /*
              "choicesByUrl": {
                "url": "https://developer.uat.usajobs.gov/API-Reference/GET-codelist-ethnicity",
                "valueName": "name"
              }
              */
            },


            // Height snippet
            {
              "type": "text",
              "name": "case_identifier_information_patient_height",
              "title": "What is your height in cm?",
              "inputType": "text",
              "isRequired": true
            },

            // Weight Snippet
            {
              "type": "text",
              "name": "case_identifier_information_patient_weight",
              "startWithNewLine": false,
              "title": "What is your weight in pounds(lbs)?",
              "inputType": "text",
              "isRequired": true,
            },

            // Email snippet
            /*
            {
              "type": "text",
              "name": "case_identifier_information_patient_email",
              "title": "Email",
              "inputType": "email"
            },
            */

            // Address Snippet
            /*
            {
              "type": "text",
              "name": "case_identifier_information_patient_address",
              "startWithNewLine": false,
              "title": "Address"
            },
            */

            // identifier Snippet
            /*
            {
              "type": "text",
              "name": "case_identifier_information_patient_national_social_number",
              "startWithNewLine": false,
              "title": "National social number/ identifier (if applicable)"
            },
            */

            // Residence Snippet
            {
              "type": "dropdown",
              "name": "case_identifier_information_patient_country_of_residence",
              "title": "Country of residence",
              "isRequired": true,
              "choices": [
                "item1",
                "item2",
                "item3"
              ],
              "choicesByUrl": {
                "url": "https://restcountries.eu/rest/v2/all",
                "valueName": "name"
              }
            },

            // Zipcode Snippet
            {
              "type": "text",
              "name": "case_identifier_information_patient_zip",
              "startWithNewLine": false,
              "title": "What is your zipcode?",
              "inputType": "text",
              "isRequired": true
            },

            // Smoked question
            {
              "type": "boolean",
              "name": "have_you_ever_smoked",
              "title": "Have you ever smoked?",
              "isRequired": true,
              "labelTrue": "Yes",
              "labelFalse": "No",
              "hideNumber": true
            },

            // Case status snippet
            {
              "type": "radiogroup",
              "name": "case_identifier_information_patient_case_status",
              //"startWithNewLine": false,
              "title": "Case status",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Suspected"
                },
                {
                  "value": "item2",
                  "text": "Probable"
                },
                {
                  "value": "item3",
                  "text": "Confirmed"
                }
              ],
              "colCount": 3


            }
          ],
          "startWithNewLine": false
        }
      ]
    },
    

    // Page I
    /*
    {
      "name": "page1",
      "navigationTitle": "Patient",
      "navigationDescription": "Patient info",
      "elements": [

        
        {
          "type": "boolean",
          "name": "is_the_person_providing_the_information_is_the_patient",
          "title": "Is the person providing the information the patient?",
          "isRequired": true,
          "labelTrue": "Yes",
          "labelFalse": "No",
          "hideNumber": true
        },

        // If boolean TRUE
        {
          "type": "panel",
          "name": "case_identifier_information ",
          "elements": [
            {
              "type": "text",
              "name": "first_names",
              "title": "First name",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "last_name",
              "startWithNewLine": false,
              "title": "Last name",
              "isRequired": true
            },
            {
              "type": "radiogroup",
              "name": "case_identifier_information_sex",
              "startWithNewLine": false,
              "title": "Sex",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Male"
                },
                {
                  "value": "item2",
                  "text": "Female"
                },
                {
                  "value": "item3",
                  "text": "Other/Not known"
                }
              ],
              "colCount": 3
            },
            {
              "type": "panel",
              "name": "case_identifier_information_patient_date_of_birth_panel",
              "elements": [
                {
                  "type": "text",
                  "name": "case_identifier_information_patient_date_of_birth_date",
                  "visibleIf": "{case_identifier_information_patient_date_of_birth_checkbox} empty",
                  "titleLocation": "hidden",
                  "inputType": "date",
                  "isRequired": true
                },
                {
                  "type": "checkbox",
                  "name": "case_identifier_information_patient_date_of_birth_checkbox",
                  "startWithNewLine": false,
                  "titleLocation": "hidden",
                  "choices": [
                    "Unknown"
                  ]
                }
              ],
              "title": "Date of Birth"
            },

            {
              "type": "panel",
              "name": "case_identifier_information_patient_age",
              "elements": [
                {
                  "type": "text",
                  "name": "case_identifier_information_patient_age_years",
                  "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
                  "title": "Years:",
                  "titleLocation": "left",
                  "inputType": "number",
                  "isRequired": true
                },
                {
                  "type": "text",
                  "name": "case_identifier_information_patient_age_months",
                  "visibleIf": "{case_identifier_information_patient_age_checkbox} empty",
                  "startWithNewLine": false,
                  "title": "Months:",
                  "titleLocation": "left",
                  "inputType": "number",
                  "isRequired": true,
                },
                {
                  "type": "checkbox",
                  "name": "case_identifier_information_patient_age_checkbox",
                  "startWithNewLine": false,
                  "titleLocation": "hidden",
                  "choices": [
                    "Unknown"
                  ]
                }
              ],
              "title": "Age (years, months) "
            },

            // Race/Ethnicity snippet
            {
              "type": "dropdown",
              "name": "case_identifier_information_patient_race",
              "title": "What is your race/ethnicity?",
              "isRequired": true,
              "choices": [
                "American Indian or Alaska Native",
                "Asian",
                "Black or African American",
                "Hispanic",
                "Native Hawaiian or Other Pacific Islander",
                "Non-Hispanic White",
                "Other"
              ],


            },


            // Height snippet
            {
              "type": "text",
              "name": "case_identifier_information_patient_height",
              "title": "What is your height in cm?",
              "inputType": "text",
              "isRequired": true
            },

            // Weight Snippet
            {
              "type": "text",
              "name": "case_identifier_information_patient_weight",
              "startWithNewLine": false,
              "title": "What is your weight in pounds(lbs)?",
              "inputType": "text",
              "isRequired": true,
            },


            // Residence Snippet
            {
              "type": "dropdown",
              "name": "case_identifier_information_patient_country_of_residence",
              "title": "Country of residence",
              "isRequired": true,
              "choices": [
                "item1",
                "item2",
                "item3"
              ],
              "choicesByUrl": {
                "url": "https://restcountries.eu/rest/v2/all",
                "valueName": "name"
              }
            },

            // Zipcode Snippet
            {
              "type": "text",
              "name": "case_identifier_information_patient_zip",
              "startWithNewLine": false,
              "title": "What is your zipcode?",
              "inputType": "text",
              "isRequired": true
            },

            // Smoked question
            {
              "type": "boolean",
              "name": "have_you_ever_smoked",
              "title": "Have you ever smoked?",
              "isRequired": true,
              "labelTrue": "Yes",
              "labelFalse": "No",
              "hideNumber": true
            },

            // Case status snippet
            {
              "type": "radiogroup",
              "name": "case_identifier_information_patient_case_status",
              //"startWithNewLine": false,
              "title": "Case status",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Suspected"
                },
                {
                  "value": "item2",
                  "text": "Probable"
                },
                {
                  "value": "item3",
                  "text": "Confirmed"
                }
              ],
              "colCount": 3


            }
          ],
          "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = true",
          "title": "Patient Information",
          "showNumber": true,
          "showQuestionNumbers": "off"
        },

        // If boolean FALSE
        {
          "type": "panel",
          "name": "interview_respondent_information_if_the_persons_providing_the_information_is_not_the_patient",
          "elements": [
            {
              "type": "text",
              "name": "first_name",
              "title": "First name ",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "last_name",
              "startWithNewLine": false,
              "title": "Last name",
              "isRequired": true
            },
            {
              "type": "radiogroup",
              "name": "interview_respondent_information_sex",
              "startWithNewLine": false,
              "title": "Sex",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Male"
                },
                {
                  "value": "item2",
                  "text": "Female"
                },
                {
                  "value": "item3",
                  "text": "Not known"
                }
              ],
              "colCount": 3
            },
            {
              "type": "panel",
              "name": "interview_respondent_information_patient_date_of_birth_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "text",
                  "name": "interview_respondent_information_patient_date_of_birth_date",
                  "visibleIf": "{interview_respondent_information_patient_date_of_birth_checkbox} empty",
                  "titleLocation": "hidden",
                  "inputType": "date"
                },
                {
                  "type": "checkbox",
                  "name": "interview_respondent_information_patient_date_of_birth_checkbox",
                  "startWithNewLine": false,
                  "titleLocation": "hidden",
                  "choices": [
                    "Unknown"
                  ]
                }
              ],
              "title": "Date of Birth"
            },
            {
              "type": "text",
              "name": "relationship_to_patient",
              "title": "Relationship to patient",
              "isRequired": true,
            },

          ],
          "visibleIf": "{is_the_person_providing_the_information_is_the_patient} = false",
          "title": "Interview respondent information",
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },
    */

    // Page II - Patient Symptoms
    /*
    {
      "name": "page2",
      "navigationTitle": "Symptoms",
      "navigationDescription": "Patient symptoms",
      "elements": [

        {
          "type": "panel",
          "name": "patient_symptoms_from_disease_onset",
          "elements": [
            {
              "type": "panel",
              "name": "date_of_first_symptom_onset",
              "elements": [
                {
                  "type": "text",
                  "name": "date_of_first_symptom_onset_date",
                  "enableIf": "{date_of_first_symptom_onset_checkbox} empty",
                  "titleLocation": "hidden",
                  "inputType": "date",
                  "width": "314px"
                },
                {
                  "type": "checkbox",
                  "name": "date_of_first_symptom_onset_checkbox",
                  "startWithNewLine": false,
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "No symptoms",
                      "enableIf": "{date_of_first_symptom_onset_checkbox} <> ['item2']"
                    },
                    {
                      "value": "item2",
                      "text": "Unknown",
                      "enableIf": "{date_of_first_symptom_onset_checkbox} <> ['item1']"
                    }
                  ],
                  "colCount": 2
                },
                {
                  "type": "radiogroup",
                  "name": "question1",
                  "title": "Fever (≥38 °C) or history of fever ",
                  "titleLocation": "left",
                  "isRequired": true,
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                    {
                      "value": "item3",
                      "text": "Unknown"
                    }
                  ],
                  "colCount": 3
                }
              ],
              "title": "Date of first symptom onset"
            },

            {
              "type": "radiogroup",
              "name": "smell_loss",
              "title": "Loss of smell and taste",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },

            {
              "type": "radiogroup",
              "name": "appetite_loss",
              "title": "Loss of appetite",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },

            {
              "type": "radiogroup",
              "name": "sore_throat",
              "title": "Sore throat",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },


            {
              "type": "radiogroup",
              "name": "runny_nose",
              "title": "Runny nose",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "radiogroup",
              "name": "cough",
              "title": "Cough",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "radiogroup",
              "name": "shortness_of_Breath",
              "title": "Shortness of Breath",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "radiogroup",
              "name": "vomiting",
              "title": "Vomiting",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "radiogroup",
              "name": "nausea",
              "title": "Nausea",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "radiogroup",
              "name": "diarrhea",
              "title": "Diarrhea",
              "titleLocation": "left",
              "isRequired": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            }
          ],
          "title": "Potential COVID-19 symptoms?",
          "startWithNewLine": false,
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },
    */

    // Page III - Patient Symptoms
    {
      "name": "page3",
      "navigationTitle": "Symptoms",
      "navigationDescription": "Patient Symptoms",
      "elements": [

        // Image Snippet
        /*
        {
          "type": "image",
          "name": "fouth_page_image",
          "width": "600px",
          "imageLink": "/Content/Images/examples/covid/04.png",
          "imageHeight": 567,
          "imageWidth": 500
        },
        */

        {
          "type": "panel",
          "name": "initial_sample_collection",
          "elements": [

            // Fever
            {
              "type": "panel",
              "name": "Fever_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Fever_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Fever (≥38 °C) or history of fever"
            },

            // Loss of smell and taste
            {
              "type": "panel",
              "name": "smell_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "smell_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Loss of smell and taste"
            },
            // Loss of appetite
            {
              "type": "panel",
              "name": "appetite_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "appetite_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Loss of appetite"
            },
            // Sore throat
            {
              "type": "panel",
              "name": "throat_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "throat_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Sore throat"
            },
            // Runny nose
            {
              "type": "panel",
              "name": "nose_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "nose_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Runny nose"
            },
            // Cough
            {
              "type": "panel",
              "name": "Cough_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Cough_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Cough"
            },
            // Shortness of Breath
            {
              "type": "panel",
              "name": "Breath_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Breath_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Shortness of Breath"
            },
            // Vomiting
            {
              "type": "panel",
              "name": "Vomiting_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Vomiting_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Vomiting"
            },
            // Nausea
            {
              "type": "panel",
              "name": "Nausea_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Nausea_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Nausea"
            },
            // Diarrhea
            {
              "type": "panel",
              "name": "Diarrhea_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Diarrhea_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Diarrhea"
            },
          ],
          "title": "Potential COVID-19 symptoms?",
          "startWithNewLine": false,
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },

    // Page III - Patient Conditions
    {
      "name": "page3",
      "navigationTitle": "Diagnosis",
      "navigationDescription": "Patient Conditions",
      "elements": [

        // Image Snippet
        /*
        {
          "type": "image",
          "name": "fouth_page_image",
          "width": "600px",
          "imageLink": "/Content/Images/examples/covid/04.png",
          "imageHeight": 567,
          "imageWidth": 500
        },
        */

        {
          "type": "panel",
          "name": "initial_sample_collection",
          "elements": [

            // Asthma
            {
              "type": "panel",
              "name": "Asthman_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Asthma_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Asthma"
            },

            // Chronic respiratory disease
            {
              "type": "panel",
              "name": "respiratory_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "respiratory_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Chronic respiratory disease"
            },
            // Chronic heart disease
            {
              "type": "panel",
              "name": "heart_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "heart_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Chronic heart disease"
            },
            // Diabetes
            {
              "type": "panel",
              "name": "Diabetes_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Diabetes_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Diabetes"
            },
            // Any Cancer
            {
              "type": "panel",
              "name": "Cancer_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Cancer_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Any Cancer"
            },
            // Stroke
            {
              "type": "panel",
              "name": "Stroke_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Stroke_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Stroke"
            },
            // Rheumatoid Arthritis
            {
              "type": "panel",
              "name": "Rheumatoid_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Rheumatoid_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Rheumatoid Arthritis"
            },
            // Hypertension
            {
              "type": "panel",
              "name": "Hypertension_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Hypertension_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Hypertension"
            },
            // Chronic Kidney Disease
            {
              "type": "panel",
              "name": "Kidney_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Kidney_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Chronic Kidney Disease"
            },
            // Immunocompromised condition
            {
              "type": "panel",
              "name": "Immunocompromised_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Immunocompromised_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Immunocompromised condition"
            },
            // Chronic lung disease
            {
              "type": "panel",
              "name": "lung_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "lung_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Chronic lung disease"
            },
            // Obesity (BMI ≥ 30 kg/m²)
            {
              "type": "panel",
              "name": "Obesity_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Obesity_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Obesity (BMI ≥ 30 kg/m²)"
            },
            // Pregnancy
            {
              "type": "panel",
              "name": "Pregnancy_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Pregnancy_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Pregnancy"
            },
            // Sickle cell disease
            {
              "type": "panel",
              "name": "Sickle_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Sickle_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Sickle cell disease"
            },
            // Other chronic condition
            {
              "type": "panel",
              "name": "chronic_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "chronic_radio",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

              ],
              "title": "Other chronic condition"
            },


          ],
          "title": "Have you ever been diagnosed with any of the following Conditions:",
          "startWithNewLine": false,
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },

    // Page 0_1
    /*
    {
      "name": "page01",
      "navigationTitle": "Complications",
      "navigationDescription": "Clinical Course",
      "elements": [
        {
          "type": "image",
          "name": "fifth_image",
          "width": "600px",
          "imageLink": "/Content/Images/examples/covid/05.png",
          "imageHeight": 713,
          "imageWidth": 500
        },
        {
          "type": "panel",
          "name": "clinical_course_complications_panel",
          "elements": [
            {
              "type": "panel",
              "name": "hospitalization_required_panel",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "hospitalization_required_radio",
                  "width": "49%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                    {
                      "value": "item3",
                      "text": "Unknown"
                    }
                  ],
                  "colCount": 3
                },
                {
                  "type": "text",
                  "name": "hospitalization_required_hospital",
                  "enableIf": "{hospitalization_required_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "Name of hospital",
                  "width": "313px",
                  "titleLocation": "left"
                }
              ],
              "title": "Hospitalization required?"
            },
            {
              "type": "radiogroup",
              "name": "icu_Intensive_Care_Unit_admission_required",
              "title": "ICU (Intensive Care Unit) admission required",
              "titleLocation": "left",
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "radiogroup",
              "name": "acute_respiratory_distress_syndrome_ards",
              "title": "Acute Respiratory Distress Syndrome (ARDS)",
              "titleLocation": "left",
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "panel",
              "name": "pneumonia_by_chest_xray_panel",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "pneumonia_by_chest_xray_radio",
                  "width": "49%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                    {
                      "value": "item3",
                      "text": "Not applicable (no X-ray performed)"
                    }
                  ],
                  "colCount": 3
                },
                {
                  "type": "text",
                  "name": "pneumonia_by_chest_xray_date",
                  "enableIf": "{pneumonia_by_chest_xray_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "Date",
                  "titleLocation": "left",
                  "width": "313px",
                  "inputType": "date"
                }
              ],
              "title": "Pneumonia by chest X-ray "
            },
            {
              "type": "panel",
              "name": "other_severe_or_life_threatening_illness_suggestive_of_an_infection_panel",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "other_severe_or_life_threatening_illness_suggestive_of_an_radio",
                  "width": "49%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                    {
                      "value": "item3",
                      "text": "Unknown"
                    }
                  ],
                  "colCount": 3
                },
                {
                  "type": "text",
                  "name": "other_severe_or_life_threatening_illness_suggestive_of_an_specify",
                  "enableIf": "{other_severe_or_life_threatening_illness_suggestive_of_an_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "Specify:",
                  "width": "313px",
                  "titleLocation": "left"
                }
              ],
              "title": "Other severe or life-threatening illness suggestive of an infection"
            },
            {
              "type": "radiogroup",
              "name": "mechanical_ventilation_required",
              "title": "Mechanical ventilation required",
              "titleLocation": "left",
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            },
            {
              "type": "radiogroup",
              "name": "extracorporeal_membrane_oxygenation_emo",
              "title": "Extracorporeal membrane oxygenation (EMO)",
              "titleLocation": "left",
              "choices": [
                {
                  "value": "item1",
                  "text": "Yes"
                },
                {
                  "value": "item2",
                  "text": "No"
                },
                {
                  "value": "item3",
                  "text": "Unknown"
                }
              ],
              "colCount": 3
            }
          ],
          "title": "Clinical Course: Complications",
          "startWithNewLine": false,
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },
    */

    // Page IV - Before Illness
    {
      "name": "page4",
      "navigationTitle": "Exposures",
      "navigationDescription": "Before illness",
      "elements": [
        {
          "type": "panel",
          "name": "direct_exposure",
          "elements": [


            {
              "type": "panel",
              "name": "others_panel",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "others_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "isRequired": true,
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },

                  ],
                  "colCount": 2
                },
                {
                  "type": "text",
                  "name": "others_specify",
                  "enableIf": "{others_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "How many:",
                  "titleLocation": "left"
                },
              ],
              "title": "Do you live with other people?",
              "showQuestionNumbers": "off"
            },

            {
              "type": "panel",
              "name": "have_you_travelled_within_the_last_days_domestically_panel",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "have_you_travelled_within_the_last_days_domestically_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "isRequired": true,
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },

                  ],
                  "colCount": 3
                },

                /*
                {
                  "type": "panel",
                  "name": "have_you_travelled_within_the_last_days_domestically_date_panel",
                  "elements": [
                    {
                      "type": "text",
                      "name": "have_you_travelled_within_the_last_days_domestically_date_from",
                      "title": "from",
                      "titleLocation": "left",
                      "inputType": "date"
                    },
                    {
                      "type": "text",
                      "name": "have_you_travelled_within_the_last_days_domestically_date_to",
                      "startWithNewLine": false,
                      "title": "to",
                      "titleLocation": "left",
                      "inputType": "date"
                    }
                  ],
                  "visibleIf": "{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                  "title": "Dates of travel"
                },
                {
                  "type": "text",
                  "name": "have_you_travelled_within_the_last_days_domestically_regions",
                  "visibleIf": "{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                  "title": "Regions:",
                  "titleLocation": "left"
                },
                {
                  "type": "text",
                  "name": "have_you_travelled_within_the_last_days_domestically_cities_visited",
                  "visibleIf": "{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "Cities visited:",
                  "titleLocation": "left"
                }
                */
              ],
              "title": "Have you travelled within the last 14 days domestically?",
              "showQuestionNumbers": "off"
            },
            {
              "type": "panel",
              "name": "have_you_travelled_within_the_last_days_internationall_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "have_you_travelled_within_the_last_days_internationall_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

                /*
                {
                  "type": "panel",
                  "name": "have_you_travelled_within_the_last_days_internationall_date_panel",
                  "elements": [
                    {
                      "type": "text",
                      "name": "have_you_travelled_within_the_last_days_internationall_date_from",
                      "title": "from",
                      "titleLocation": "left",
                      "inputType": "date"
                    },
                    {
                      "type": "text",
                      "name": "have_you_travelled_within_the_last_days_internationall_date_to",
                      "startWithNewLine": false,
                      "title": "to",
                      "titleLocation": "left",
                      "inputType": "date"
                    }
                  ],
                  "visibleIf": "{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                  "title": "Dates of travel"
                },
                {
                  "type": "text",
                  "name": "have_you_travelled_within_the_last_days_internationall_countries",
                  "visibleIf": "{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                  "title": "Countries visited:",
                  "titleLocation": "left"
                },
                {
                  "type": "text",
                  "name": "have_you_travelled_within_the_last_days_internationall_cities",
                  "visibleIf": "{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "Cities visited:",
                  "titleLocation": "left"
                }
                */
              ],
              "title": "Have you travelled within the last 14 days internationally?",
              "showQuestionNumbers": "off"
            },
            {
              "type": "panel",
              "name": "in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },

                /*
                {
                  "type": "text",
                  "name": "in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_date",
                  "enableIf": "{in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "Date of last contact",
                  "titleLocation": "left",
                  "inputType": "date"
                }
                */
              ],
              "title": "In the past 14 days, have you had contact with a anyone with suspected or confirmed 2019-nCoV infection?",
              "showQuestionNumbers": "off"
            },


            {
              "type": "panel",
              "name": "patient_attended_festival_or_mass_gathering_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "patient_attended_festival_or_mass_gathering_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },
                /*
                {
                  "type": "text",
                  "name": "patient_attended_festival_or_mass_gathering_specify",
                  "enableIf": "{patient_attended_festival_or_mass_gathering_radio} = 'item1'",
                  "startWithNewLine": false,
                  "title": "Specify:",
                  "titleLocation": "left"
                }
                */
              ],
              "title": "Attended festival or mass gathering in the past 30 days?",
              "showQuestionNumbers": "off"
            },

            {
              "type": "panel",
              "name": "illness_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "illness_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },
              ],
              "title": "Patient exposed to person with similar illness?",
              "showQuestionNumbers": "off"
            },

            {
              "type": "panel",
              "name": "hygiene_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "hygiene_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },
              ],
              "title": "You perform hand hygiene according to CDC guidance?",
              "showQuestionNumbers": "off"
            },

            {
              "type": "panel",
              "name": "protection_panel",
              "isRequired": true,
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "protection_radio",
                  "width": "50%",
                  "titleLocation": "hidden",
                  "choices": [
                    {
                      "value": "item1",
                      "text": "Yes"
                    },
                    {
                      "value": "item2",
                      "text": "No"
                    },
                  ],
                  "colCount": 2
                },
              ],
              "title": "You wear personal protection equipment consistent with CDC guidelines?",
              "showQuestionNumbers": "off"
            },

          ],
          "title": "Direct Exposure",
          "showNumber": true
        }
      ]
    },

    // Page V - Status of form
    {
      "name": "page5",
      "navigationTitle": "Completion",
      "navigationDescription": "Status of form",
      "elements": [

        /*
        {
          "type": "image",
          "name": "seventh_image",
          "width": "600",
          "imageLink": "/Content/Images/examples/covid/07.png",
          "imageHeight": 441,
          "imageWidth": 500
        },
        */

        {
          "type": "panel",
          "name": "status_of_form_completion_panel",
          "elements": [
            {
              "type": "boolean",
              "name": "status_of_form_completion_boolean",
              "title": "Form completed",
              "isRequired": true,
              "labelTrue": "Yes",
              "labelFalse": "No or partially"
            },
            {
              "type": "radiogroup",
              "name": "status_of_form_completion_radio",
              "visibleIf": "{status_of_form_completion_boolean} = false",
              "title": "Reason:",
              "hasOther": true,
              "choices": [
                {
                  "value": "item1",
                  "text": "Missed"
                },
                {
                  "value": "item2",
                  "text": "Not attempted"
                },
                {
                  "value": "item3",
                  "text": "Not performed"
                },
                {
                  "value": "item4",
                  "text": "Refusal"
                }
              ],
              "otherText": "Other, specific:"
            }
          ],
          "title": "Status of form completion",
          "startWithNewLine": false,
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    }
  ],
  "showProgressBar": "top",
  "progressBarType": "buttons"
};
const survey = new Survey.Model(json);

        

        

        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;
