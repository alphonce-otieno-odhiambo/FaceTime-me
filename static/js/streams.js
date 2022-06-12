const APP_ID = '6d6cf41ea2f349ce9d417adf432ac392'
const CHANNEL = 'al'
const TOKEN = '0066d6cf41ea2f349ce9d417adf432ac392IACyCZPExDwu1bkPlEj6ONg0+6+mF7EGKXJa8d22YqkH72plO3kAAAAAEABF5qhUnRSnYgEAAQCdFKdi'

const client = AgoraRTC.createClient({
    mode:'rtc',
    codec:'vp8'
})
let localTracks = []
let remoteUsres = {}

let joinAndDisplayLocalStreams = async ()=>{
    UID =  await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = ` <div class="video-container" id="user-container-${UID}">
    <div class="username-wrapper"><span class="user-name"></span>My name</div>
    <div class="video-player" id="user-${UID}">
    </div>
</div>`
document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

localTracks[1].play(`user-${UID}`)
await client.publish([localTracks[0],localTracks[1]])
}
joinAndDisplayLocalStreams();