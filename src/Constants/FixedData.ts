import type { ApiData } from "~types/ApiDataTypes"

export const whatIsApiData: ApiData = {
  "originalId": "GhX8sNyFo5w",
  "conclusion": "The video provides a generally accurate explanation of APIs and SDKs, using helpful analogies. However, some nuances and edge cases are simplified for brevity, which could potentially lead to minor misunderstandings.",
  "percentages": {
    "overall": 90,
    "falseInformation": 0,
    "verifiedInformation": 90,
    "misleadingInformation": 10
  },
  "topics": {
    "categories": [
      {
        "title": "API",
        "count": 5,
        "_id": "67d968929030abc7c603d0c7"
      },
      {
        "title": "SDK",
        "count": 5,
        "_id": "67d968929030abc7c603d0c8"
      },
      {
        "title": "Software Development",
        "count": 2,
        "_id": "67d968929030abc7c603d0c9"
      }
    ],
    "count": 3
  },
  "generalTopic": "The difference between APIs and SDKs",
  "timestamps": [
    {
      "timestampInS": null,
      "timestampInStr": "title",
      "label": "Correct",
      "claim": "The video title accurately reflects the content: explaining the difference between APIs and SDKs.",
      "explanation": "The video focuses on differentiating APIs and SDKs, as promised in the title.",
      "source": "",
      "validation": {
        "isValid": true,
        "confidence": 100,
        "explanation": "The title clearly states the video's purpose, which is fulfilled by the content.",
        "references": []
      },
      "_id": "67d968929030abc7c603d0ca"
    },
    {
      "timestampInS": 5,
      "timestampInStr": "00:05",
      "label": "Correct",
      "claim": "An API is like a waiter in a restaurant.",
      "explanation": "This analogy effectively illustrates the role of an API as a messenger between the user (diner) and the system (kitchen).",
      "source": "",
      "validation": {
        "isValid": true,
        "confidence": 95,
        "explanation": "The analogy simplifies the concept but accurately represents the core function of an API.",
        "references": [
          {
            "title": "What is an API? - MuleSoft",
            "url": "https://www.mulesoft.com/resources/api/what-is-an-api",
            "author": null,
            "publisher": "MuleSoft",
            "publicationDate": "2023-09-26T00:00:00.000Z",
            "credibilityScore": 8,
            "_id": "67d968929030abc7c603d0cc"
          }
        ]
      },
      "_id": "67d968929030abc7c603d0cb"
    },
    {
      "timestampInS": 20,
      "timestampInStr": "00:20",
      "label": "Correct",
      "claim": "SDKs provide tools and libraries for specific platforms.",
      "explanation": "SDKs often include pre-built functions, documentation, and other resources tailored to a particular platform or programming language.",
      "source": "",
      "validation": {
        "isValid": true,
        "confidence": 95,
        "explanation": "This aligns with the common understanding and usage of SDKs in software development.",
        "references": [
          {
            "title": "Software Development Kit (SDK)",
            "url": "https://www.techtarget.com/whatis/definition/software-development-kit-SDK",
            "author": "Margaret Rouse",
            "publisher": "TechTarget",
            "publicationDate": "2021-07-01T00:00:00.000Z",
            "credibilityScore": 9,
            "_id": "67d968929030abc7c603d0ce"
          }
        ]
      },
      "_id": "67d968929030abc7c603d0cd"
    },
    {
      "timestampInS": 35,
      "timestampInStr": "00:35",
      "label": "Misleading",
      "claim": "You always need an API to use an SDK.",
      "explanation": "While SDKs often utilize APIs, this isn't universally true. Some SDKs might provide local functionalities without requiring external communication.",
      "source": "",
      "validation": {
        "isValid": false,
        "confidence": 60,
        "explanation": "The statement oversimplifies the relationship.  SDKs can bundle APIs, but not all SDK functionalities require an API call.",
        "references": []
      },
      "_id": "67d968929030abc7c603d0cf"
    },
    {
      "timestampInS": 50,
      "timestampInStr": "00:50",
      "label": "Correct",
      "claim": "An SDK is like a fully equipped kitchen (compared to the API as a waiter).",
      "explanation": "This analogy reinforces the idea that SDKs provide a comprehensive set of tools for development, unlike the more limited functionality of an API.",
      "source": "",
      "validation": {
        "isValid": true,
        "confidence": 90,
        "explanation": "The analogy effectively communicates the broader scope of an SDK compared to an API.",
        "references": []
      },
      "_id": "67d968929030abc7c603d0d0"
    },
    {
      "timestampInS": 65,
      "timestampInStr": "01:05",
      "label": "Correct",
      "claim": "Using an SDK can simplify the development process.",
      "explanation": "SDKs abstract away complexities and provide ready-made components, reducing the amount of code developers need to write.",
      "source": "",
      "validation": {
        "isValid": true,
        "confidence": 95,
        "explanation": "This is a key benefit of using SDKs and is widely acknowledged in software development.",
        "references": []
      },
      "_id": "67d968929030abc7c603d0d1"
    }
  ],
  "_id": "67d968929030abc7c603d0c6",
  "__v": 0
};