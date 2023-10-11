import callApi from "../../apis/callApi.mjs";
import Button from "./Button.mjs";
import Vuex from "vuex"
import { GET_LIST_MEMBER }  from '../../apis/graphql/query.mjs'
const {mapGetters, mapActions} = Vuex

const ListMember = {
    template: `
             <div class="ml-2" v-if="listMember.length > 0">
                <table class="border-separate border border-slate-500 ">
                  <thead>
                    <tr>
                      <th class="border border-slate-600">Id</th>
                      <th class="border border-slate-600">User Name</th>
                      <th class="border border-slate-600">Contact Number</th>
                      <th class="border border-slate-600">Home Town</th>
                      <th class="border border-slate-600">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="member in listMember" :key="member.id">
                      <td class="border border-slate-700">[[ member.id ]] </td>
                      <td class="border border-slate-700">[[ member.user_name || member.userName ]]</td>
                      <td class="border border-slate-700">[[ member.contact_number || member.contactNumber ]]</td>
                      <td class="border border-slate-700">[[ member.home_town || member.homeTown ]]</td>
                      <td class="border border-slate-700">
                           <p style="cursor: pointer; " @click="redirect">redirect</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Button></Button>
              </div>
              <H2 v-else> No Member Found! </H2>
`,

    name: 'ListMember',
    delimiters: ['[[', ']]'],
    components: {
        Button,
    },
    data() {
        return {}
    },
    mounted() {
        // this.fetchListMember();
        this.fetchListMemberGraphQL();
    },
    computed: {
        ...mapGetters(["listMember"]),
    },
    methods: {
        ...mapActions(["getListMember"]),
        async fetchListMember() {
            const url = `http://localhost:8000/api/member`;
            const options = {
                method: 'GET',
            }
            return callApi(url, options)
                .then(res => {
                    this.getListMember(res.data.list_member);
                })

        },
        async fetchListMemberGraphQL() {
            await this.$apollo
                .query({
                    query: GET_LIST_MEMBER,
                    variables: {
                        page: 1,
                        pageSize: 5,
                    },
                    fetchPolicy: "network-only",
                })
                .then((res) => {
                    this.getListMember(res.data.listMember.members);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async redirect() {
            await this.$router.push({path: "/"})
        }
    }
}

export default ListMember;




