function volume_sphere() {
    //Write your code here

	const radius = parseFloat(document.getElementById("radius").value);
      let volume;

      if (isNaN(radius) || radius < 0) {
        volume = NaN;
      } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
      }

      document.getElementById("volume").value = volume;
      return false; // prevent form refresh
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
