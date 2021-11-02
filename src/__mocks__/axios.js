const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
        },
        login: {
          username: "Rodigo"
        }
      },
      {
        name: {
          first: "Laith",
          last: "Harb"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
        },
        login: {
          username: "Rodigo"
        }
      },
      {
        name: {
          first: "Laith",
          last: "Harb"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
        },
        login: {
          username: "Rodigo"
        }
      },
      {
        name: {
          first: "Laith",
          last: "Harb"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
        },
        login: {
          username: "Rodigo"
        }
      },
      {
        name: {
          first: "Laith",
          last: "Harb"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/47.jpg",
        },
        login: {
          username: "Rodigo"
        }
      }
    ]
  }
}

export default {
  get: jest.fn().mockReturnValue(mockResponse)
}