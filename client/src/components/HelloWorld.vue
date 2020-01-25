<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      Made with 💙 by
      <a href="https://github.com/ThomFDV" class="pure-link">ThomFDV</a>
    </h3>

    <div class="card-container">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">User Form</div>
            <div class="md-subhead">Create a new user here</div>
          </md-card-header>

          <md-card-content>
            <md-field>
              <label>Initial Value</label>
              <md-input
                id="name"
                class="form-control error"
                v-model="userData.name"
              ></md-input>
            </md-field>
            <p v-if="error">{{ error }}</p>
            <md-field>
              <label>Initial Value</label>
              <md-input
                type="number"
                id="age"
                class="form-control"
                v-model="userData.age"
              ></md-input>
            </md-field>
          </md-card-content>

          <md-card-actions>
            <md-button class="md-raised md-primary" @click.prevent="submitted"
              >Create</md-button
            >
          </md-card-actions>
        </md-ripple>
      </md-card>
    </div>
    <div>
      <md-card
        v-for="(user, index) in users"
        :key="user"
        class="multiple-card-container"
      >
        <md-card-header>
          <div class="md-title">User {{ index }}</div>
        </md-card-header>

        <md-card-content>
          <p>{{ user.name }}</p>
          <p>{{ user.age }}</p>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      userData: {
        name: '',
        age: 28
      },
      users: []
    }
  },
  methods: {
    submitted: function () {
      axios.post('http://localhost:9000/users', {
        name: this.userData.name,
        age: this.userData.age
      })
    }
  },
  computed: {
    error () {
      return this.userData.name.trim().length < 7
        ? 'Please enter a longer username'
        : ''
    }
  },
  mounted () {
    axios.get('http://localhost:9000/users').then(res => {
      this.users = res.data
    })
  }
}
</script>

<style scoped>
.pure-link {
  text-decoration: none;
}
.md-card-actions > .md-button {
  margin: auto !important;
  min-width: 130px;
}
.card-container {
  margin: auto;
  width: 100%;
  padding: 2rem;
}
.multiple-card-container {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
@media (min-width: 768px) {
  .card-container {
    width: 70%;
  }
}
@media (min-width: 1024px) {
  .card-container {
    width: 70%;
  }
}
</style>
