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
            <div class="md-title">User TOTOTOTOTOTO</div>
            <div class="md-subhead">Create a new user here</div>
          </md-card-header>

          <md-card-content>
            <md-field :class="nameError">
              <label>User name</label>
              <md-input
                id="name"
                class="form-control"
                v-model="userData.name"
                required
              ></md-input>
              <span class="md-error">Name must not be empty</span>
            </md-field>
            <md-field :class="ageError">
              <label>User age</label>
              <md-input
                type="number"
                id="age"
                class="form-control"
                v-model="userData.age"
                required
              ></md-input>
              <span class="md-error">Age must not be empty</span>
            </md-field>
          </md-card-content>

          <md-card-actions>
            <md-button class="md-raised md-primary" id="submit" @click.prevent="submitted"
              >Create</md-button
            >
          </md-card-actions>
        </md-ripple>
      </md-card>
    </div>
    <div>
      <md-card
        v-for="(user, index) in users"
        :key="index"
        class="multiple-card-container"
      >
        <md-card-header>
          <div class="md-title">User - {{ index }}</div>
        </md-card-header>

        <md-card-content>
          <p>{{ user.name }}</p>
          <p>{{ user.age }}</p>
        </md-card-content>

        <md-card-actions>
          <md-button id="delete" class="md-icon-button md-raised md-accent" @click.prevent="deleted(user.name)">
            <md-icon>delete</md-icon>
          </md-button>
        </md-card-actions>
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
        name: 'toto',
        age: 1
      },
      users: []
    }
  },
  methods: {
    submitted: function () {
      if (!this.userData.name || !this.userData.age) return
      this.users.push({
        name: this.userData.name,
        age: this.userData.age
      })
      axios.post('http://ec2-34-246-190-69.eu-west-1.compute.amazonaws.com/users', {
        name: this.userData.name,
        age: this.userData.age
      })
    },
    deleted: function (userName) {
      this.users = this.users.filter((user) => user.name !== userName)
      axios.delete(`http://ec2-34-246-190-69.eu-west-1.compute.amazonaws.com/users/${userName}`)
    }
  },
  computed: {
    nameError () {
      return {
        'md-invalid': !this.userData.name
      }
    },
    ageError () {
      return {
        'md-invalid': !this.userData.age
      }
    }
  },
  mounted () {
    axios.get('http://ec2-34-246-190-69.eu-west-1.compute.amazonaws.com/users').then(res => {
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

.multiple-card-container > .md-card-actions > .md-button {
  min-width: 0 !important;
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
