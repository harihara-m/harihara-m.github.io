---
layout: archive
title: "Beyond Academics"
permalink: /more/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Welcome to a glimpse into my life outside my PhD studies! While my research is a significant part of my journey, I believe in fostering a balanced life. This page shares some of my personal interests and activities.

I enjoy engaging in activities that offer a refreshing break from my academic work. My primary interests include:

## Exploring Diverse Cinematic Works:

I love watching movies from across the globe, ranging from critically acclaimed international films to hidden regional gems. This passion has helped me understand diverse cultures and perspectives, constantly expanding my worldview. I am always open to movie recommendations, so if you have any favorites (especially regional or lesser-known titles), please feel free to share them!

<style>
  /* Container for the movie grid */
  .letterboxd-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 30px;
    justify-content: flex-start;
  }

  /* Individual movie card */
  .movie-card {
    position: relative;
    width: 130px; /* Adjust width as needed */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  /* Hover effect */
  .movie-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.2);
    z-index: 2;
  }

  /* The movie poster image */
  .movie-card img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  /* Optional: Star rating overlay if available in description */
  .movie-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    padding: 10px 5px 5px;
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 0.3s;
    text-align: center;
  }
  
  .movie-card:hover .movie-overlay {
    opacity: 1;
  }
  
  /* Loading text style */
  #lb-loading {
    font-style: italic;
    color: #666;
  }
</style>

<div id="letterboxd-wrapper">
  <h3>Recent Watches</h3>
  <div id="lb-loading">Loading recent movies...</div>
  <div class="letterboxd-container" id="letterboxd-grid"></div>
  <p>
    <a href="https://letterboxd.com/hmaharna/films/by/rating/" target="_blank" class="btn btn--info">View Full Library on Letterboxd &rarr;</a>
  </p>
</div>

<script>
  // YOUR LETTERBOXD USERNAME
  const username = "hmaharna"; 
  
  // We use rss2json to convert the XML feed to JSON so browser JS can read it
  const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://letterboxd.com/${username}/rss/`;

  fetch(feedUrl)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('letterboxd-grid');
      const loading = document.getElementById('lb-loading');
      
      // Hide loading text
      loading.style.display = 'none';

      // We only want the first 5 or 6 items to keep the page clean
      const items = data.items.slice(0, 6); 

      items.forEach(item => {
        // Create Link Wrapper
        const link = document.createElement('a');
        link.href = item.link;
        link.target = "_blank";
        link.className = "movie-card";
        link.title = item.title; // Shows title on hover

        // Extract Image URL from the HTML description content
        // Letterboxd puts the poster in the description tag
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = item.description;
        const img = tempDiv.querySelector('img');

        if (img) {
          // Clean up the image styling
          img.removeAttribute('width');
          img.removeAttribute('height');
          
          link.appendChild(img);
          
          // Optional: Add an overlay div for the title
          const overlay = document.createElement('div');
          overlay.className = "movie-overlay";
          // Simplify title (remove year/stars for cleaner look)
          overlay.innerText = "View on Letterboxd"; 
          link.appendChild(overlay);

          container.appendChild(link);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching Letterboxd feed:', error);
      document.getElementById('lb-loading').innerText = "Unable to load movies right now.";
    });
</script>

[I am continuously building a list of the movies I have watched which can be found here](https://letterboxd.com/hmaharna/films/by/rating/).

## Fitness and Recreation:

To maintain an active lifestyle and unwind, I regularly engage in various physical activities. I play badminton on the Notre Dame campus, incorporate gym workouts into my routine, and often run 5Ks around the scenic campus lakes. If you are an ND student interested in badminton, gym workouts, or group runs, feel free to connect, I would be happy to join!

## Travel and Cultural Exploration:

Traveling is another passion of mine. I enjoy exploring different cultures and landscapes. Traveling allows me to broaden my perspective and appreciate the diversity of our world. So far, my travels have taken me to:

<style>
  .travel-section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    max-width: 800px;
  }
  .travel-intro {
    font-size: 1.1em;
    margin-bottom: 20px;
    color: #333;
  }
  summary {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    list-style: none;
    font-size: 1.05em;
  }
  summary:hover {
    background-color: #f0f0f0;
  }
  /* Custom marker */
  summary::marker {
    color: #555;
  }
  .country-title {
    color: #0056b3; /* Professional Blue */
    font-size: 1.2em;
  }
  .state-title {
    font-weight: 600;
    color: #444;
  }
  .city-name {
    font-weight: bold;
    color: #2c3e50;
  }
  .note {
    font-weight: normal;
    font-style: italic;
    font-size: 0.9em;
    color: #666;
  }
  /* New style for Universities */
  .uni-item {
    color: #6a0dad; /* Deep Purple to stand out */
    font-weight: 500;
  }
  ul {
    margin-top: 5px;
    margin-bottom: 15px;
  }
</style>

<div class="travel-section">
  <p class="travel-intro">
    Traveling is another passion of mine. I enjoy exploring different cultures and landscapes. Traveling allows me to broaden my perspective and appreciate the diversity of our world. So far, my travels have taken me to:
  </p>

  <details>
    <summary><strong class="country-title">🇮🇳 India</strong></summary>
    <div style="padding-left: 20px;">
      <details>
        <summary><span class="state-title">Odisha</span> <span class="note">(Home State)</span></summary>
        <ul>
          <li><span class="city-name">Baleshwar</span> <span class="note">(Hometown)</span>
            <ul>
              <li>Chandipur Beach (famous for its receding sea)</li>
              <li>Emami Jagannath Temple</li>
              <li>Panchalingeswar Temple</li>
            </ul>
          </li>
          <li><span class="city-name">Bhubaneswar</span> (The Temple City)
            <ul>
              <li class="uni-item">🎓 National Institute of Science Education and Research (NISER)</li>
              <li class="uni-item">🎓 Utkal University</li>
              <li>Nandankanan Zoological Park</li>
              <li>Udayagiri and Khandagiri Caves</li>
              <li>Dhauli Shanti Stupa (Peace Pagoda)</li>
              <li>Regional Museum of Natural History & Odisha State Museum</li>
              <li>Lingaraj Temple</li>
              <li>Mukteshwar Mahadev Temple</li>
              <li>Rajarani Temple</li>
              <li>Kedaragauri Temple</li>
            </ul>
          </li>
          <li><span class="city-name">Puri</span>
            <ul>
              <li>Shree Jagannatha Temple</li>
              <li>Shree Gundicha Temple</li>
              <li>Golden Beach</li>
            </ul>
          </li>
          <li><span class="city-name">Konark</span>
            <ul>
              <li>Konark Sun Temple (UNESCO World Heritage Site)</li>
            </ul>
          </li>
          <li><span class="city-name">Baripada & Mayurbhanj</span>
            <ul>
              <li class="uni-item">🎓 Maharaja Sriram Chandra Bhanja Deo University (MSCBDU)</li>
              <li class="uni-item">🎓 MPC Autonomous College</li>
              <li>Similipal National Park (Tiger Reserve)</li>
              <li>Bālidiha Dam</li>
            </ul>
          </li>
          <li><span class="city-name">Cuttack</span> (The Silver City)
            <ul>
               <li class="uni-item">🎓 Ravenshaw University</li>
            </ul>
          </li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Kerala</span></summary>
        <ul>
          <li><span class="city-name">Thiruvananthapuram</span>
            <ul>
              <li class="uni-item">🎓 IISER Thiruvananthapuram (IISER TVM)</li>
              <li class="uni-item">🎓 Indian Institute of Space Science and Technology (IIST)</li>
              <li>Sree Padmanabhaswamy Temple (richest temple in the world)</li>
              <li>Ponmudi Hill Station</li>
            </ul>
          </li>
          <li><span class="city-name">Alleppey</span> (known for houseboats and backwaters)</li>
          <li><span class="city-name">Munnar</span> (famous for tea gardens)</li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Karnataka</span></summary>
        <ul>
          <li><span class="city-name">Bengaluru</span> (The Silicon Valley of India)
            <ul>
               <li>Jigani</li>
            </ul>
          </li>
          <li><span class="city-name">Hampi</span> (UNESCO World Heritage site with ancient ruins)</li>
          <li><span class="city-name">Chitradurga</span>
            <ul>
              <li>Chitradurga Fort</li>
            </ul>
          </li>
          <li><span class="city-name">Davanagere</span></li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">West Bengal</span></summary>
        <ul>
          <li><span class="city-name">Kolkata</span> (City of Joy)</li>
          <li><span class="city-name">Kharagpur</span></li>
          <li><span class="city-name">Digha</span> (seaside resort town)</li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Delhi</span></summary>
        <ul>
          <li class="uni-item">🎓 Jawaharlal Nehru University</li>
          <li><span class="city-name">New Delhi</span> (Capital of India)</li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Tamil Nadu</span></summary>
        <ul>
          <li><span class="city-name">Rameswaram</span> (pilgrimage center on Pamban Island)</li>
          <li><span class="city-name">Madurai</span> (famous for Meenakshi Amman Temple)</li>
          <li><span class="city-name">Kanniyakumari</span> (southernmost tip of mainland India)</li>
        </ul>
      </details>
    </div>
  </details>

  <details>
    <summary><strong class="country-title">🇺🇸 United States</strong></summary>
    <div style="padding-left: 20px;">
      <details>
        <summary><span class="state-title">Indiana</span> <span class="note">(Current State)</span></summary>
        <ul>
          <li><span class="city-name">South Bend</span> <span class="note">(Current Town)</span>
             <ul>
               <li class="uni-item">🎓 University of Notre Dame</li>
               <li>Potawatomi Zoo</li>
               <li>Potato Creek State Park</li>
               <li>Heatherwood Equestrian Academy</li>
             </ul>
          </li>
          <li><span class="city-name">West Lafayette</span>
            <ul>
               <li class="uni-item">🎓 Purdue University</li>
            </ul>
          </li>
          <li><span class="city-name">Indianapolis</span> (State Capital)</li>
          <li><span class="city-name">Michigan City & Chesterton</span>
            <ul>
              <li>Indiana Dunes State Park (sand dunes along Lake Michigan)</li>
            </ul>
          </li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Illinois</span></summary>
        <ul>
          <li><span class="city-name">Chicago</span>
            <ul>
              <li>Millennium Park (famous for "The Bean" sculpture)</li>
              <li>Willis Tower (glass Skydeck offering city views)</li>
              <li>Navy Pier (waterfront destination with rides)</li>
              <li>Chicago River Architecture Tour</li>
              <li>Field Museum</li>
              <li>Adler Planetarium</li>
              <li>Shedd Aquarium</li>
              <li>Griffin Museum of Science and Industry</li>
              <li>Chicago Riverwalk</li>
            </ul>
          </li>
          <li><span class="city-name">Champaign</span></li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">New York</span></summary>
        <ul>
          <li><span class="city-name">New York City</span>
            <ul>
              <li>Statue of Liberty (iconic symbol of freedom)</li>
              <li>One World Observatory (tallest building in the Western Hemisphere)</li>
              <li>Times Square (famous commercial intersection)</li>
            </ul>
          </li>
          <li><span class="city-name">Niagara Falls</span> (world-famous waterfalls)</li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">New Jersey</span></summary>
        <ul>
          <li><span class="city-name">Jersey City</span>
             <ul>
               <li>Liberty State Park</li>
               <li>Ellis Island National Museum of Immigration</li>
             </ul>
          </li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Missouri</span></summary>
        <ul>
          <li><span class="city-name">St. Louis</span>
             <ul>
               <li>Gateway Arch National Park (tallest arch in the world)</li>
             </ul>
          </li>
          <li><span class="city-name">Springfield</span></li>
          <li><span class="city-name">Joplin</span></li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Michigan</span></summary>
        <ul>
          <li><span class="city-name">Niles/Buchanan</span>
            <ul>
               <li>Fernwood Botanical Garden</li>
            </ul>
          </li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Ohio</span></summary>
        <ul>
          <li><span class="city-name">Columbus</span></li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Wisconsin</span></summary>
        <ul>
          <li><span class="city-name">Madison</span>
             <ul>
                <li class="uni-item">🎓 University of Wisconsin-Madison</li>
             </ul>
          </li>
        </ul>
      </details>
      <details>
        <summary><span class="state-title">Oklahoma</span></summary>
        <ul>
          <li><span class="city-name">Oklahoma City</span></li>
          <li><span class="city-name">Norman</span>
             <ul>
               <li class="uni-item">🎓 University of Oklahoma</li>
             </ul>
          </li>
        </ul>
      </details>
    </div>
  </details>
  <p>I am always looking to expand this list and discover more of the world in my free time!</p>
</div>

## Connect:

While this site focuses on my academic journey, I am also active on social media. Feel free to connect with me on [Facebook](https://www.facebook.com/hariharamaharna1644/) or [Instagram](https://www.instagram.com/hariharamaharna/).

Thanks for visiting this section! If you would like to learn more about my professional background, research, or projects, please explore the other pages on my site.
