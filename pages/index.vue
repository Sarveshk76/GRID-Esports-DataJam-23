  <template>
    <v-row justify="center" align="center">
      <v-col>
        <v-card outlined>
          <v-card-title class="headline justify-center  " align="center">
            Welcome to the GRID Esports DataJam 23
          </v-card-title>
          <v-img src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/525/955/datas/full_width.png" ></v-img>
          
          <v-row class="pa-3" align="center" justify="center">
            <v-btn outlined class="ma-3" @click="wsSwitch">Start Stream</v-btn>
          </v-row>
          <br>
          <h3 align="center">CS-GO</h3>
          <v-card-text align="center">
           
              <v-row>

                <v-col cols="12">
                  <v-card outlined class="ma-5">
                    <v-card-title class="justify-center">Team {{ team1Name }} </v-card-title>
                    <v-row>
                    <v-col class="ma-5" v-for="p in team1Players">
                      <v-card class="pa-5" outlined>
                        Player Name: {{ p.name }}
                        <br>
                        Participation Status: {{ p.participationStatus }}
                        <br>
                        Kills: {{ p.kills }}
                        <br>
                        Kill Assists Received: {{ p.killAssistsReceived }}
                        <br>
                        Kill Assists Given: {{ p.killAssistsGiven }}
                        <br>
                        Kill Assists Received From Player: {{ killAssistsReceivedFromPlayer }}
                        <br>
                        Weapon Kills: {{ p.weaponKills }}
                        <br>
                        Team Kills: {{ p.teamkills }}
                        <br>
                        Team Kill Assists Received: {{ p.teamkillAssistsReceived }}
                        <br>
                        Team Kill Assists Given: {{ p.teamkillAssistsGiven }}
                        <br>
                        Team Kill Assists Received From Player: {{ p.teamkillAssistsReceivedFromPlayer }}
                        <br>
                        Weapon Team Kills: {{ p.weaponTeamkills }}
                        <br>
                        Self Kills: {{ p.selfkills }}
                        <br>
                        Deaths: {{ p.deaths }}
                        <br>
                        Structures Destroyed: {{ p.structuresDestroyed }}
                        <br>
                        Structures Captured: {{ p.structuresCaptured }}
                        <br>
                      </v-card>
                    </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              
                <v-col cols="12">
                  <v-card outlined class="ma-5">
                    <v-card-title class="justify-center">Team {{ team2Name }} </v-card-title>
                    <v-row>
                    <v-col class="ma-5" v-for="p in team2Players">
                      <v-card class="pa-5" outlined>
                        Player Name: {{ p.name }}
                        <br>
                        Participation Status: {{ p.participationStatus }}
                        <br>
                        Kills: {{ p.kills }}
                        <br>
                        Kill Assists Received: {{ p.killAssistsReceived }}
                        <br>
                        Kill Assists Given: {{ p.killAssistsGiven }}
                        <br>
                        Kill Assists Received From Player: {{ killAssistsReceivedFromPlayer }}
                        <br>
                        Weapon Kills: {{ p.weaponKills }}
                        <br>
                        Team Kills: {{ p.teamkills }}
                        <br>
                        Team Kill Assists Received: {{ p.teamkillAssistsReceived }}
                        <br>
                        Team Kill Assists Given: {{ p.teamkillAssistsGiven }}
                        <br>
                        Team Kill Assists Received From Player: {{ p.teamkillAssistsReceivedFromPlayer }}
                        <br>
                        Weapon Team Kills: {{ p.weaponTeamkills }}
                        <br>
                        Self Kills: {{ p.selfkills }}
                        <br>
                        Deaths: {{ p.deaths }}
                        <br>
                        Structures Destroyed: {{ p.structuresDestroyed }}
                        <br>
                        Structures Captured: {{ p.structuresCaptured }}
                        <br>
                        
                      </v-card>
                    </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
              
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>

  <script>
  const url = "ws://localhost:8080/2579089";
  var cnt = 0;


  export default{
  computed: {
    title() {
      return this.$store.state.dataStore.title
    },
    team1Name(){
      return this.$store.state.dataStore.team1Name
    },
    
    team1Players() {
      return this.$store.state.dataStore.team1Players
    },
    team2Name(){
      return this.$store.state.dataStore.team2Name
    },
    team2Players() {
      return this.$store.state.dataStore.team2Players
    },
  },
  methods: {
    wsSwitch(){
      const ws = new WebSocket(url);
        this.$store.dispatch('dataStore/wsconnect', ws)
        console.log("connected")
        cnt = 1;
    },
    
  }}
  </script>
