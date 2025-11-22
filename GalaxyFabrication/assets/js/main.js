const testimonials = [
    { name: "Ramesh Kumar", feedback: "Excellent ACP work! Finished on time, very professional team.", img: "testimonials1.jpg" },
    { name: "Priya Sharma", feedback: "Best structural glazing in Chennai. Highly recommended!", img: "testimonials2.jpg" },
    { name: "Mohammed Ali", feedback: "Frameless glass doors changed the entire look of our showroom.", img: "testimonials3.jpg" },
    { name: "Suresh Rajan", feedback: "Quality work at reasonable price. Will hire again.", img: "testimonials4.jpg" },
    { name: "Anitha Devi", feedback: "Superb finishing and attention to detail. Thank you Galaxy!", img: "testimonials5.jpg" }
  ];
  
  const container = document.getElementById('testimonials');
  testimonials.forEach(t => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="testimonial-card">
          <img src="assets/img/${t.img}" class="rounded-circle mb-3" width="80" height="80">
          <h5>${t.name}</h5>
          <p>"${t.feedback}"</p>
          <div class="text-warning">★★★★★</div>
        </div>
      </div>`;
  });