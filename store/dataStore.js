export const state = () => ({
  title: "test",
  team1Name : "team1",
  team1Players: [],
  team2Name : "team2",
  team2Players: [],
    
})

// contains your actions
export const actions = {
  
  wsconnect({ state, commit }, ws){
    try {
      ws.onmessage = (e) => {

        e = JSON.parse(e.data)
        commit('setTitle', e.events[0].action)
        commit('setTeam1Name', e.events[0].target.state.teams[0].name)
        commit('setTeam1Players', e.events[0].target.state.teams[0].players)
        commit('setTeam2Name', e.events[0].target.state.teams[1].name)
        commit('setTeam2Players', e.events[0].target.state.teams[1].players)
      }
    } catch (error) {
      console.log(error);
    }
    
  },
  
}
// contains your mutations
export const mutations = {
  setTitle(state, value){
    state.title = value
  },
  setTeam1Players(state, value){
    state.team1Players = value
  },
  setTeam1Name(state, value){
    state.team1Name = value
  },
  setTeam2Players(state, value){
    state.team2Players = value
  },
  setTeam2Name(state, value){
    state.team2Name = value
  },
}