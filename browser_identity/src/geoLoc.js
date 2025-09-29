let geo = Navigator.geolocation;

export async function checkLoc() {
    let position = geo.getCurrentPosition();
    return position 
}
