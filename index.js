const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b615b0c856msh433d197e0e7cd6dp126027jsn4c260724c7f1',
      'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
};

const fetchApi = async (IP) => { 
   try {
        const res = await fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${IP}`, OPTIONS);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

const $ = selector => document.querySelector(selector)

const form = $("#form")
const input = $("#input")
const submit = $("#submit")
const results = $("#results")

form.addEventListener("submit" , async(event) => { 
    event.preventDefault()
    const { value } = input
    if(!value) return;

    submit.setAttribute("desabled", "")
    submit.setAttribute("aria-busy" , "true")
    let IpInfo = JSON.stringify(await fetchApi(value) , null , 2)
    results.innerHTML = IpInfo
    submit.removeAttribute("desabled")
    submit.removeAttribute("aria-busy")
})