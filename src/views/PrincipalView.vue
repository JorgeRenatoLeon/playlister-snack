<template>
    <div class="principal-view">
        <div class="blur-overlay"/>
        <div class="data-snacks-container row m-0">
            <div class="col col-30">
                <div class="card-transparent songs-list">
                    <div class="songs-header row m-0">
                        <div class="col p-0">
                            <strong>Promoted Songs</strong>
                        </div>
                        <div class="col p-0 d-flex justify-content-end songs-header-info">
                            Avalaible Spots: 2
                        </div>
                    </div>
                    
                    <div class="song active">
                        <div class="song-container row m-0">
                            <div class="col col-2 p-0 d-flex align-items-center">
                                <img src="../assets/img/song-cover.png" alt="" width="100%">
                            </div>
                            <div class="col col-10">
                                <div class="row m-0 d-flex justify-content-end song-status">
                                    <div class="text p-0">
                                    Status
                                    </div> 
                                    <div class="number p-0">
                                        01
                                    </div>
                                </div>
                                <div class="song-title">
                                    Sinmigo
                                </div>
                                <div class="song-tags">
                                    <div class="song-tags-title">
                                        MATCHED WITH
                                    </div>
                                    <div class="tags row m-0">
                                        <div class="col tag" v-for="(tag, i) in tags" :key="i">
                                            {{tag}}
                                        </div>
                                        <div class="col logo">
                                            <img src="../assets/img/spotify-logo.png" alt="logo" width="22px" height="22px">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="song" v-for="(song, index) in songs" :key="index">
                        <div class="song-container row m-0">
                            <div class="col col-2 p-0 d-flex align-items-center">
                                <img src="../assets/img/song-cover.png" alt="" width="100%">
                            </div>
                            <div class="col col-10">
                                <div class="row m-0 d-flex justify-content-end song-status">
                                    <div class="text p-0">
                                    Status
                                    </div> 
                                    <div class="number p-0">
                                        01
                                    </div>
                                </div>
                                <div class="song-title">
                                    {{song}}
                                </div>
                                <div class="song-tags">
                                    <div class="song-tags-title">
                                        MATCHED WITH
                                    </div>
                                    <div class="tags row m-0">
                                        <div class="col tag" v-for="(tag, i) in tags" :key="i">
                                            {{tag}}
                                        </div>
                                        <div class="col logo">
                                            <img src="../assets/img/spotify-logo.png" alt="logo" width="22px" height="22px">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-40">

                <div class="main-resume snack-card snack-card-shadow row m-0 mb-4 py-4">
                    <div class="col col-3">
                        <div class="value-number">
                            232
                        </div>
                        <div class="value-text">
                            Views
                        </div>
                    </div>
                    <div class="col col-3">
                        <div class="value-number">
                            51
                        </div>
                        <div class="value-text">
                            Listens
                        </div>
                    </div>
                    <div class="col col-3">
                        <div class="value-number">
                            9
                        </div>
                        <div class="value-text">
                            Reviews
                        </div>
                    </div>
                    <div class="col col-3">
                        <div class="value-number">
                            5
                        </div>
                        <div class="value-text">
                           Placements 
                        </div>
                    </div>
                </div>

                <div class="search-section">
                    <img src="../assets/img/search-bar.jpg" loading="lazy" alt="search" style="width: 100%">
                </div>

                <div class="snack-card snack-card-shadow grad-did0001">
                    Snack Card Gradient
                </div>

                <div class="snack-card snack-card-shadow">
                    Snack Card with no Background Color
                </div>

                <div class="snack-card snack-card-shadow" v-for="i in 5" :key="i">
                    <img src="https://assets.website-files.com/613b0e973a32f5789f2bf3af/613b8f73ced6a46a6ce47318_id_0001--totalviews.svg" loading="lazy" alt="card" style="width: 100%">
                </div>

            </div>
            <div class="col col-30">
                <div class="card-transparent info-card">
                    <div class="info-card-content">
                        INFO CONTENT
                    </div>
                    <div class="info-card-footer">
                        This is the footer
                    </div>
                </div>
                <div class="card-transparent info-card">
                    <div class="info-card-content">
                        INFO CONTENT
                    </div>
                    <div class="info-card-footer">
                        This is the footer
                    </div>
                </div>
                <div class="card-transparent info-card">
                    <div class="info-card-content">
                        INFO CONTENT
                    </div>
                    <div class="info-card-footer">
                        This is the footer
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            dataSnacks: [],
            tags: ['Rock', 'Pop', 'Blues', 'Dance', 'Latin'],
            songs: ['Todo Cambia', 'Contra Todo Pronostico', 'En Plena Calle', 'Cortocircuitos']
        }
    },
    created(){
        axios.get("https://api.playlister.club/data/pc/playlists/getuserfeed?userid=12834&songid=21cpSXwjiiZoHogxw7bZxB")
        .then((response) => {
            console.log(response)
            this.dataSnacks = response.data
            axios.get("https://api.playlister.club/data/pc/playlists/getuserfeeddata?context=7")
            .then((res) => {
                console.log(res)
                this.dataSnacks[0].content = res.data;
            })
        })
    },

}
</script>

<style>
.principal-view {
    background-color: black;
}

.blur-overlay {
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    padding: 30px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-image: url("https://assets.website-files.com/613b0e973a32f5789f2bf3af/613b24e968a5785058f59cb0_sample-cover.jpeg");
    background-position: 50% 0%;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.8;
    -webkit-filter: blur(70px);
    filter: blur(70px);
}

.col-30 {
    max-width: 30% !important;
    padding: 15px;
}

.col-40 {
    max-width: 40% !important;
    padding: 15px;
}

.data-snacks-container {
    position: absolute;
    z-index: 100;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: auto;
    min-height: 100vh;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.search-section{
    position: sticky;
    top: 10px;
    margin-bottom: 15px;
}

.songs-list {
    position: sticky;
    top: 15px;
    padding-top: 0px !important;
    background-color: rgba(0,0,0,0.4) !important;
    border-width: 0px !important;
}


.card-transparent {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-style: solid;
    border-width: 1px;
    border-color: hsla(0, 0%, 100%, 0.09);
    border-radius: 6px;
    background-color: hsla(0, 0%, 100%, 0.06);
    box-shadow: 0 1px 30px 0 rgb(0 0 0 / 15%);
    text-align: left;
    margin-bottom: 15px;
}

.info-card {
    padding-bottom: 0px;
    padding-top: 10px;
}

.info-card-content {
    padding: 10px;
    padding-top: 0px;
}

.info-card-footer {
    width: 100%;
    padding: 10px;
    background-color: rgba(255,255,255,0.1);
}

.main-resume {
    background-color: rgba(0,0,0,0.6) !important;
    min-height: fit-content !important;
}

.value-text {
    color: rgba(255,255,255,0.4);
    font-size: 0.9rem;
}

.value-number {
    color: white;
    font-size: 32px;
    font-weight: 600;
}

.songs-header {
    padding: 10px;
    font-size: 15px;
    width: 100%;
    line-height: 20px;
}

.songs-header-info{
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    font-weight: 600;
    line-height: 23px;
}

.song {
    width: 100%;
    padding: 10px;
}

.song.active{
    background: rgba(46, 196, 182, 0.401215);
    border-left: 4px solid #2EC4B6;
}

.song-status {
    font-size: 10px;
    font-weight: 600;
    color: rgba(255,255,255,0.4);
}

.song-status > .text, .number {
    width: fit-content !important;
}

.song-status > .number {
    margin-left: 15px;
    font-size: 22px;
    line-height: 22px;
    font-weight: 400;
}

.song-title{
    margin-top: -15px;
}

.song-tags-title{
    font-size: 10px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 3px;
}

.tag {
    font-size: 12px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 11px;
    max-width: fit-content !important;
    padding: 5px 9px !important;
    margin-left: 5px;
    margin-top: 5px !important;
}

.logo {
    max-width: fit-content !important;
    margin-left: auto;
    padding-right: 0px !important;
}
</style>