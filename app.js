var app = new Vue({
  el: '#app',
  data: {
    firstName: "Olivia",
    lastName: "Konotey-Ahulu",
    description: "Freelance journalist and student in Journalism & Human Rights at Sciences Po Paris",
    photo: "14480649_10157495710935585_9176104511162469198_o.jpg",
    twitter: "@OliviaGKA",

    mail: "oliviaka@btinternet.com",
    experiences: [{
      dateBegin: "May 2018",
      dateEnd: "August 2018",
      name: "World Food Programme",
      title: "Intern",
      description: "Capacity building for Lesotho's office"
    }, {
      dateBegin: "September 2017",
      dateEnd: "May 2019",
      name: "Democracy 2.1",
      title: "Researcher",
      description: "Researched participatory democracy"
    }, {
      dateBegin: "January 2017",
      dateEnd: "Today",
      name: "Lacuna Magazine",
      title: "Reporter",
      description: "Pitch and write feature stories"
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "2019",
      name: "Dual Master in Journalism & Human Rights",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2017",
      name: "BA in English Literature",
      university: "Warwick University"
    }],
    languages: ["French"],
    skills: ["Adobe Audition", "Adobe Premiere Pro", "Coding"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})
