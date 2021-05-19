<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link :to="{ name:'transaksi.create'}" class="btn btn-success btn-lg mb-3" >
                    Create
                </router-link>
                <div class="card shadow rounded">
                <div class="card-header">
                    List Transaksi
                </div>
                <div class="card-body">
                    <table class="table table-striped table-hovered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(transaksi, index) in transaksi"  :key="index">
                                <td>{{transaksi.name}}</td>
                                <td>{transaksi.amount}</td>
                                <td>
                                    <div class="btn-group">
                                        <router-link :to="{ name: 'transaksi.edit', params:{id:1} }" class="btn btn-outline-info btn-sm" >edit</router-link>
                                        <button class="btn btn-outline-danger btn-sm">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted,ref} from 'vue'

export default {
    
    setup(){
        let transaksi = ref([]);

        onMounted(() => {
            axios.get('http://localhost:8000/api/transaksi')
            .then((result) => {
                transaksi.value = result.data
            }).catch((err) => {
                console.log(err)
            });
        })
   }     
}
</script>