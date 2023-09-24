
fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('container');

                data.forEach(dinosaur => {
                    const nameElement = document.createElement('div');
                    nameElement.textContent = dinosaur.Name;
                    nameElement.classList.add('dinosaur-name');

                    const descriptionElement = document.createElement('div');
                    descriptionElement.textContent = dinosaur.Description;
                    descriptionElement.classList.add('dinosaur-description');

                    const dinosaurElement = document.createElement('div');
                    dinosaurElement.appendChild(nameElement);
                    dinosaurElement.appendChild(descriptionElement);
                    dinosaurElement.classList.add('dinosaur-container');

                    container.appendChild(dinosaurElement);
                });
            });

/*fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('container');

    data.forEach(dinosaur => {
      const nameElement = document.createElement('div');
      nameElement.textContent = dinosaur.Name;

      const descriptionElement = document.createElement('div');
      descriptionElement.textContent = dinosaur.Description;

      const dinosaurElement = document.createElement('div');
      dinosaurElement.appendChild(nameElement);
      dinosaurElement.appendChild(descriptionElement);

      container.appendChild(dinosaurElement);
      console.log(dinosaur);
    });
  });*/

  /*fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Aquí puedes procesar los datos obtenidos
  });*/