<template>
    <div class="principal-view">
        <div class="blur-overlay"/>
        <div class="data-snacks-container row m-0">
            <Login v-on:login="login($event)" :user="user"/>
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
                    
                    <div class="song" :class="selected===index? 'active' : ''" v-for="(song, index) in songs" :key="index" @click="selected=index">
                        <div class="song-container row m-0">
                            
                            <div class="row m-0 p-0 d-flex justify-content-end song-status">
                                <div class="text p-0">
                                    Status
                                </div> 
                                <div class="number p-0">
                                    {{'0'+(index+1)}}
                                </div>
                            </div>
                            
                            <div class="row p-0 song-content">
                                <div class="col col-2 p-0 d-flex align-items-center">
                                    <div class="song-cover">
                                        <!-- <img src="../assets/img/song-cover.png" alt="" width="100%"> -->
                                        <img class="play-song" src="../assets/svg/mini-play-icon.svg" alt="play" width="60%" height="60%">
                                    </div>
                                </div>
                                <div class="col col-10 song-info">
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
                                                <a href="#">
                                                    <img src="../assets/img/spotify-logo.png" alt="logo" width="22px" height="22px">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-40">
                <div class="section-center row m-0 d-flex justify-content-center">
                    <div class="main-resume snack-card snack-card- row m-0 mb-4 py-4 ">
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

                    <div class="search-section p-0">
                        <b-form-input
                            id="input-search"
                            v-model="search"
                            class="search-input"
                            type="text"
                        />
                    </div>

                    <div class="base snack-card snack-card-shadow p-0">
                        <div class="mood bg-card-layer grad-did0019 w-100">
                            <div class="snack-card-bg-items">
                                <div class="snack-card-bg-items-content">
                                    <div style="width: 94%; height: 80%;top:62px;left:3%;z-index: 204;opacity:0.37;background: url('/svg/0019-card/chat-bubble.svg') no-repeat; background-size: 100% auto"/>
                                    <img src="../assets/svg/0019-card/rectangle.svg" alt="VS" height="186px" style="top:31px; left: 10%;z-index: 205;opacity:0.37;width: fit-content">
                                </div>
                            </div>
                            <div class="data snack-card-content w-100 d-flex flex-column">
                                <div class="first-section row m-0 d-flex align-items-center">
                                    YOU’VE GOT A NEW REVIEW!
                                </div>
                                <div class="second-section d-flex flex-column">
                                    <div class="review-message">
                                        Hey. Nice Song. I like the melody, but I feel it a bit commercial for us. Thanks!
                                    </div>
                                    <div class="review-user mt-4 d-flex">
                                        <div class="user-name" style="line-height: 28px">
                                            Island Beats
                                        </div>
                                        <div class="spotify-logo d-flex align-items-center" style="margin-left: 5px">
                                            <img src="../assets/img/spotify-logo.png" alt="logo" width="14px" height="14px">
                                        </div>
                                        <div class="user-rating" style="margin-left: auto">
                                            <b-form-rating id="rating-inline" inline disabled icon-empty="star-fill" value="3"></b-form-rating>
                                        </div>
                                    </div>
                                </div>
                                <div class="third-section d-flex">
                                    <div class="timestamp p-0 w-auto d-flex align-items-center">
                                        8 MINS. AGO
                                    </div>
                                    <div class="more-info w-auto d-flex align-items-center">
                                        <b-button v-b-toggle.collapse-1 class="no-button p-0">
                                            <img src="../assets/svg/arrow-down.svg" alt="arrow" width="25px" height="25px" style="cursor: pointer">
                                        </b-button>
                                    </div>
                                </div>
                                <b-collapse id="collapse-1" class="expanded p-0" style="transition: 0.5s">
                                    <div class="content">
                                        <div class="d-flex flex-column">
                                            <div class="review d-flex flex-column py-2">
                                                Artist deliver a vibrant performance that is full of confidence
                                                <b-form-rating id="rating-inline" inline disabled value="4"></b-form-rating>
                                            </div>
                                            <div class="review d-flex flex-column py-2">
                                                The song has a professional approach to recording and production
                                                <b-form-rating id="rating-inline" inline disabled value="2.5"></b-form-rating>
                                            </div>
                                            <div class="review d-flex flex-column py-2">
                                                The song's style is in great demand commercially
                                                <b-form-rating id="rating-inline" inline disabled value="3.5"></b-form-rating>
                                            </div>
                                            <div class="review-tags d-flex py-2">
                                                <div class="d-flex flex-column">
                                                    <div class="title-container">
                                                        <div class="tags-title">
                                                            Vocals
                                                        </div>
                                                    </div>
                                                    <div class="title-container mt-2">
                                                        <div class="tags-title">
                                                            On the artist
                                                        </div>
                                                    </div>
                                                    <div class="title-container mt-2">
                                                        <div class="tags-title">
                                                            Lyrics
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <div class="reviews d-flex">
                                                        <div class="tag" v-for="(tag, i) in tags" :key="i">
                                                            {{tag}}
                                                        </div>
                                                    </div>
                                                    <div class="reviews d-flex mt-2">
                                                        <div class="tag" v-for="(tag, i) in tags" :key="i">
                                                            {{tag}}
                                                        </div>
                                                    </div>
                                                    <div class="reviews d-flex mt-2">
                                                        <div class="tag" v-for="(tag, i) in tags" :key="i">
                                                            {{tag}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-collapse>
                            </div>
                        </div>
                    </div>


                    <div class="snack-card snack-card-shadow p-0">
                        <img src="img/banners/id_0034--notification-review-gotnew-compress.svg" loading="lazy" alt="card" style="width: 100%; height: 100%">
                    </div>

                    <div class="snack-card snack-card-shadow p-0">
                        <img src="img/banners/id_0034--notification-review-gotnew-fullx.svg" loading="lazy" alt="card" style="width: 100%; height: 100%">
                    </div>

                    <div class="snack-card snack-card-shadow p-0">
                        <div class="bg-card-layer grad-did0001 h-100 w-100">
                            <div class="snack-card-bg-items">
                                <div class="snack-card-bg-items-content">
                                    <img src="../assets/svg/first-card/Oval.svg" alt="Oval" height="100%" style="top:0%;z-index: 899;opacity:0.35">
                                    <img src="../assets/svg/first-card/Oval-1.svg" alt="Oval1" height="72%" style="top:14%;z-index: 900">
                                    <img src="../assets/svg/first-card/Oval-2.svg" alt="Oval2" height="56%" style="top:22%;z-index: 901">
                                    <img src="../assets/svg/first-card/Oval-3.svg" alt="Oval3" height="36%" style="top:32%;z-index: 902">
                                    <img src="../assets/svg/first-card/Oval-4.svg" alt="Oval4" height="16%" style="top:42%;z-index: 903">
                                    <img src="../assets/svg/first-card/VS.svg" alt="VS" height="10%" style="top:45%;z-index: 904;opacity:1">
                                </div>
                            </div>
                            <div class="snack-card-content h-100 w-100">
                                <div class="snack-card-title">
                                    TOTAL VIEWS
                                </div>
                                <div class="row m-0 h-100">
                                    <div class="snack-card-col col p-0">
                                        <div class="h-70 w-100 d-flex flex-column align-items-center justify-content-center">
                                            
                                            <div class="value-number text-card">
                                                2,130
                                            </div>
                                            <div class="value-text text-card">
                                                THIS WEEK
                                            </div>

                                        </div>
                                        <div class="snack-card-row h-30 w-100 d-flex flex-column align-items-center justify-content-center">
                                            <div class="value-number text-footer-card">
                                                12.5%
                                            </div>
                                            <div class="value-text text-footer-card">
                                                more than last week
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col p-0">
                                        <div class="h-70 w-100 d-flex flex-column align-items-center justify-content-center">
                                            
                                            <div class="value-number text-card">
                                                6,382
                                            </div>
                                            <div class="value-text text-card">
                                                ALL TIMES
                                            </div>

                                        </div>
                                        <div class="snack-card-row m-0 h-30 w-100 d-flex flex-column align-items-center justify-content-center">
                                            <div class="value-number text-footer-card">
                                                6,9%
                                            </div>
                                            <div class="value-text text-footer-card">
                                                increase in the last 7 days
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="snack-card snack-card-shadow p-0" v-for="(svg, i) in svgs" :key="i">
                        <img :src="svg" loading="lazy" alt="card" style="width: 100%; height: 100%">
                    </div>

                    <!-- <div class="snack-card snack-card-shadow p-0">
                        Snack Card with no Background Color
                    </div> -->
                </div>

            </div>
            <div class="col col-30">
                <div class="card-transparent info-card">
                    <div class="info-card-content">
                        INFO CONTENT
                    </div>
                    <div class="info-card-footer">
                        trend text area
                    </div>
                </div>
                <div class="card-transparent info-card">
                    <div class="info-card-content">
                        INFO CONTENT
                    </div>
                    <div class="info-card-footer">
                        trend text area
                    </div>
                </div>
                <div class="card-transparent info-card">
                    <div class="info-card-content">
                        INFO CONTENT
                    </div>
                    <div class="info-card-footer">
                        trend text area
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery';
import Login from '../components/Login.vue';

export default {
  components: { Login },
    data() {
        return {
            dataSnacks: [],
            search: '',
            selected: 0,
            tags: ['Rock', 'Pop', 'Blues', 'Dance', 'Latin'],
            songs: ['Sinmigo', 'Todo Cambia', 'Contra Todo Pronostico', 'En Plena Calle', 'Cortocircuitos'],
            svgs: [
                'img/banners/id_0001--totalviews.svg',
                // 'img/banners/id_0005--views-dailyAvg.svg',
                // 'img/banners/id_0006--listens-dailyAvg.svg',
                // 'img/banners/id_0009--views-increaseSentiment-places.svg',
                // 'img/banners/id_0013--engagements-achievement.svg',
                // 'img/banners/id_0017--placements-achievement-top-week.svg',
                // 'img/banners/id_0021--views-to-listen-ratio.svg',
                // 'img/banners/id_0025--track-vs-top3tracks-in-genrex.svg',
                // 'img/banners/id_0034--notification-review-gotnew-compress.svg',
                // 'img/banners/id_0034--notification-review-gotnew-fullx.svg',
                // 'img/banners/id_0033--notification-newplacement-full-compress.svg',
                // 'img/banners/id_0033--notification-newplacementz-full.svg',
                // 'img/banners/id_0031--views-xtimes-comparedto.svg',
                // 'img/banners/id_0002-totallistens.svg',
                // 'img/banners/id_0003--totalreviews2.svg',
                // 'img/banners/id_0004--totalplacement.svg',
                // 'img/banners/id_0029--notification-placement-GotNew.svg',
                // 'img/banners/id_0034--placements-xtimes-comparedto.svg',
            ],
            js_appkey_header: 'x-app-key',
            js_appkey_value: '7945643DACBA4335B27300796E8C392A',
            js_auth_cookie: 'datafx_token_7945643DACBA4335B27300796E8C392A',
            // activeTrack: null,
            appSettings: {},
            followerTiers: [],
            root: 'https://api.playlister.club',
            loading: true,
            autoLoadingOnRequest: true,
            addTrackInfo: null,
            addTrackEvent: null,
            addTrackPlaylist: null,
            shadowBannedUsers: [],
            unreadMessageCount: 0,
            initiateChatUser: null,
            shareTrackWithUser: null,
            timeoutId: null,
            user: null,
            remoteDevMode: false,
            musicGenres: [],
            reauthenticationError: null,
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
        
        $.fn.visible = function() {
            
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                _top          = $t.offset().top;
            
            return (viewTop >= _top);

        };
    },
    mounted(){

        var allMods = $(".search-section");

        document.addEventListener('scroll', function () {
            
            allMods.each(function(i, el) {
                var eli = $(el);

                if (eli.visible(true)) {
                    eli.addClass("no-border-radius");
                }
                else {
                    eli.removeClass("no-border-radius");
                }
            });
            
        }, true /*Capture event*/);
    },
    computed:{
    },
    methods: {
        async login(credentials){
            console.log(credentials)
            this.$emit('login', credentials)
            var response = await this.logInUser(credentials.email, credentials.password)
            console.log(response);
        },
        async getData(url, myparams, myheaders) {
            this.loading = true;
            this.$emit('loadingUpdated', this.loading);
            const req = await this.getDataNL(url, myparams, myheaders);
            this.loading = false;
            this.$emit('loadingUpdated', this.loading);
            return req;
        },
        async getDataNL(url, myparams, myheaders) {
            // getData no loader
            let myurl = url;
            if (url.indexOf('https://') != 0) {
                myurl = this.root + url;
            }
            let reqheaders = myheaders;
            if (!myheaders) {
                reqheaders = { headers: this.getAuthHeaders() };
            }
            if (myparams) {
                reqheaders.params = myparams;
            }
            const req = await new Promise((resolve, reject) => {
                this.$http.get(
                myurl,
                reqheaders,
                ).then((response) => {
                // success callback
                resolve(response.json());
                }, (error) => {
                // error callback
                console.warn(error);
                reject(error);
                // return error;
                });
            });
            return req;
        },
        getAuthHeaders(token) {
            if (!token) token = this.$cookie.get(this.js_auth_cookie);
            // we configure the headers only one time using ajax setup
            // Create an Initialize .js and include it in every page or call in every page that requires authentication.
            const headers = {};
            headers[this.js_appkey_header] = this.js_appkey_value;
            headers['x-auth-token'] = token;

            return headers;
        },
        async logInUser(email, pwd) {
            const deferred = $.Deferred();
            const hash = btoa(`${email}:${pwd}`);
            const auth_hash = `Basic ${hash}`;
            const myheaders = {};
            myheaders.Authorization = auth_hash;
            myheaders[this.js_appkey_header] = this.js_appkey_value;

            const userInfo = await this.getData(
                '/pc_users/LoginWithCredentialsAndCookie/PlaylisterClub', // url
                null, // params
                { headers: myheaders, withCredentials: true }, // headers
            );
            if (userInfo.token) {
                this.$cookie.set(this.js_auth_cookie, userInfo.token, { expires: 7, path: '/' });

                this.initSiteSettings(userInfo.token);
                deferred.resolve(userInfo);
            } else {
                deferred.reject(userInfo);
            }
            return deferred;
        },
        async initSiteSettings() {
            const myv = this;

            myv.updateGlobalLoggedInUser().then(async (user) => {
                if (user && user.Id) {
                const userStats = await this.getUserStats(user.Id);
                if (typeof (userStats.UserTier) !== 'undefined') {
                    user.UserTier = userStats.UserTier.Value;
                    user.UserTierName = userStats.UserTier.Description;
                }

                user.Stats = userStats;
                user.stats = userStats;
                const userGenres = await this.getData(
                    '/data/pc/playlists/getusermaingenres', null, null,
                );
                user.UserGenres = userGenres;
                const followerTiersResponse = await this.getData(
                    '/data/pc/playlists/getfollowertiers', null, null,
                );

                const followerTiers = [];
                followerTiersResponse.forEach((tier) => {
                    followerTiers[followerTiers.length] = tier;
                });
                myv.followerTiers = followerTiers;

                const activitityTiersResponse = await this.getData(
                    '/data/pc/playlists/getactivitytiers', null, null,
                );
                const activityTiers = [];
                activitityTiersResponse.forEach((tier) => {
                    activityTiers[activityTiers.length] = tier;
                });

                myv.activityTiers = activityTiers;

                myv.user = user;
                } else {
                myv.user = null;
                }
            });
            this.loadMusicGenres();

            this.getAppSettings();

        },
        async getUserStats(userId) {
            const userStatsResponse = await this.getData(
                '/data/pc/playlists/getuserstats', { context: userId, compress: true }, null,
            );
            const userStats = {};
            userStatsResponse.forEach((item) => {
                userStats[item.Type] = {
                Value: item.Value, Period: item.PeriodValue, Description: item.Description, MetricLevel: item.MetricLevel,
                };
            });
            return userStats;
            },
            async updateGlobalLoggedInUser() {
            const myv = this;
            sessionStorage.removeItem('current_user');
            const deferred = $.Deferred();
            myv.getCurrentUser((user) => {
                this.user = user;
                this.$emit('userUpdated', user);
                deferred.resolve(user);
            });
            return deferred;
        },
        async getCurrentUser(callback) {
            const emptyuser = {
                Id: null, Name: null, Image: null, SpotifyArtistId: null, email: null, UserType: null, Phone: null, EmailVerified: null, SMSNotify: null, PCAuthenticated: null, Genres: null,
            };
            if (typeof (this.$cookie.get(this.js_auth_cookie)) === 'undefined') {
                sessionStorage.removeItem('current_user');
                callback(emptyuser);
            } else if (sessionStorage.getItem('current_user') && sessionStorage.getItem('current_user') != 'undefined') {
                const tempuser = JSON.parse(sessionStorage.getItem('current_user'));
                if (typeof (tempuser.Id) !== 'undefined') {
                callback(tempuser);
                } else {
                callback(emptyuser);
                }
            } else {
                try {
                const userInfo = await this.getData(
                    '/pc_users/GetLoginUser/PlaylisterClub',
                    { returnfields: 'Id,Name,Image,SpotifyArtistId,Email,UserType,Phone,EmailVerified,SMSNotify,PCAuthenticated' },
                    // {returnfields: "Id,Name,Image,SpotifyArtistId,email,UserType,Phone,emailverified,smsnotify"},
                    null,
                );

                if (typeof (userInfo.Id) !== 'undefined') {
                    if (userInfo.UserType === 'artist') {
                    const artistgenres = await this.getData('/data/pc/playlists/getartistmaingenres');
                    userInfo.Genres = artistgenres.map(genre => this.toTitleCase(genre.Genre));
                    }
                    sessionStorage.setItem('current_user', JSON.stringify(userInfo));
                    callback(userInfo);
                } else {
                    callback(emptyuser);
                }
                } catch (error) {
                callback(emptyuser);
                }
            }
            },
            toTitleCase(str) {
            return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        },
        async loadMusicGenres() {
            const myv = this;
            const musicGenresResponse = await this.getData(
                '/data/pc/playlists/getmaingenres',
                null,
                null,
            );
            const genres = [];
            musicGenresResponse.forEach((genre) => {
                genres[genres.length] = genre.Genre;
            });
            myv.musicGenres = genres;
            },
            async getAppSettings() {
            const appSettingsResponse = await this.getData('/data/pc/playlists/getappsettings', null, null);

            const appSettings = {};
            appSettingsResponse.forEach((itemsetting) => {
                appSettings[itemsetting.ConfigKey] = itemsetting.Value;
            });
            this.appSettings = appSettings;
            return appSettings;
        },
    }
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
    top: 0px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
}

.songs-list {
    position: sticky;
    top: 15px;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    background: rgba(18, 22, 33, 0.2);
    background-color: rgba(18, 22, 33, 0.2) !important;
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
    border-radius: 9px;
    background-color: hsla(0, 0%, 100%, 0.06);
    box-shadow: 0 1px 30px 0 rgb(0 0 0 / 15%);
    text-align: left;
    margin-bottom: 15px;
}

.info-card {
    padding-bottom: 0px;
    padding-top: 10px;
    min-height: 200px;
}

.info-card-content {
    padding: 10px;
    padding-top: 0px;
}

.info-card-footer {
    width: 100%;
    padding: 10px;
    background-color: rgba(255,255,255,0.1);
    margin-top: auto;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 9px;
}

.main-resume {
    background: radial-gradient(193.75% 89.93% at 50% 0%, rgba(0, 0, 0, 0.12185) 0%, rgba(0, 0, 0, 0.412722) 100%) !important;
    min-height: 170px !important;
    align-items: center;
}

.value-text {
    color: rgba(255,255,255,0.4);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: normal;
}

.value-number {
    color: white;
    font-size: 32px;
    font-weight: 600;
    font-family: Graphik, sans-serif;
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
    letter-spacing: normal;
}

.song {
    transition: 1s;
    width: 100%;
    padding: 10px;
    cursor: pointer;
}

.song.active{
    transition: 0.3s;
    background: rgba(46, 196, 182, 0.401215);
    border-left: 4px solid #2EC4B6;
}

.song:hover{
    background: rgba(46, 196, 182, 0.401215);
}

.song:last-child{
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
}

.song-cover{
    min-width: 100%;
    aspect-ratio: auto 50 / 50;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.play-song{
    transition: 0.5s;
}

.play-song:hover{
    opacity: 0.7;
}

.song-status {
    font-size: 10px;
    font-weight: 600;
    color: rgba(255,255,255,0.4);
    letter-spacing: normal;
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

.song-content{
    margin: 0px !important;
    margin-top: -15px !important;
}

.song-info{
    padding-top: 4px;
    padding-bottom: 4px;
}

.song-title{
    font-size: 20px;
    line-height: 24px;
}

.song-tags-title{
    font-size: 10px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 6px;
    margin-top: 8px;
    letter-spacing: normal;
}

.tag {
    font-size: 12px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    max-width: fit-content !important;
    padding: 5px 9px !important;
    margin-right: 5px;
    margin-top: 5px !important;
    letter-spacing: normal;
}

.logo {
    max-width: fit-content !important;
    margin-left: auto;
    padding-right: 0px !important;
}

.search-input {
    color: rgba(255, 255, 255, 0.4) !important;
    background-color: rgba(0,0,0,0.5) !important;
    border: 0 !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 0 0 !important;
    height: 40px;
    max-width: 760px;
}

.no-border-radius > .search-input{
    border-radius: 0px !important;
}
</style>