import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";
import "./Scroll.css";

export default function Scroll() {
  const [toggleTxt, setToggleTxt] = useState(false);
  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0px)" : "translateX(50%)",
  });

  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        ducimus aut aliquam. Quae, maiores eum maxime repellendus, dolores
        tempora voluptates nulla alias delectus sequi laborum labore suscipit
        atque libero ipsum excepturi officia eius consequatur. Laboriosam vel
        fuga, porro iure quasi doloremque! Hic commodi debitis perferendis sunt
        alias nemo provident itaque velit laudantium ratione? Distinctio eum
        quidem soluta a architecto placeat excepturi unde aliquam sed animi, at,
        molestiae et perferendis voluptas ullam quod earum, ut similique vel id!
        Nobis harum laborum minus neque quasi doloribus ullam, aliquam dolorem
        nisi. Quo reprehenderit voluptates soluta quidem fuga eveniet aliquid
        dignissimos expedita eius officia quae repellat iusto odio, corrupti
        fugit ducimus porro numquam provident fugiat, accusamus dolor! Excepturi
        reiciendis amet ullam expedita at natus doloremque praesentium autem
        magnam quisquam? Error, deserunt quasi? Minus architecto iure autem
        debitis eveniet inventore ex. Quam molestiae perspiciatis veritatis
        nostrum quo quos cum neque quod molestias, sit officiis excepturi veniam
        reprehenderit ex sequi voluptatem cupiditate suscipit hic sunt odio
        ipsum rerum. Voluptas odit corrupti soluta praesentium, voluptatem nulla
        hic excepturi sapiente perferendis molestiae reiciendis cum, illo
        quisquam exercitationem cumque impedit. Quasi dolor quo harum veritatis,
        at dicta? Harum in est aut velit suscipit commodi, perspiciatis debitis
        consequatur cupiditate voluptatum.
      </p>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        ducimus aut aliquam. Quae, maiores eum maxime repellendus, dolores
        tempora voluptates nulla alias delectus sequi laborum labore suscipit
        atque libero ipsum excepturi officia eius consequatur. Laboriosam vel
        fuga, porro iure quasi doloremque! Hic commodi debitis perferendis sunt
        alias nemo provident itaque velit laudantium ratione? Distinctio eum
        quidem soluta a architecto placeat excepturi unde aliquam sed animi, at,
        molestiae et perferendis voluptas ullam quod earum, ut similique vel id!
        Nobis harum laborum minus neque quasi doloribus ullam, aliquam dolorem
        nisi. Quo reprehenderit voluptates soluta quidem fuga eveniet aliquid
        dignissimos expedita eius officia quae repellat iusto odio, corrupti
        fugit ducimus porro numquam provident fugiat, accusamus dolor! Excepturi
        reiciendis amet ullam expedita at natus doloremque praesentium autem
        magnam quisquam? Error, deserunt quasi? Minus architecto iure autem
        debitis eveniet inventore ex. Quam molestiae perspiciatis veritatis
        nostrum quo quos cum neque quod molestias, sit officiis excepturi veniam
        reprehenderit ex sequi voluptatem cupiditate suscipit hic sunt odio
        ipsum rerum. Voluptas odit corrupti soluta praesentium, voluptatem nulla
        hic excepturi sapiente perferendis molestiae reiciendis cum, illo
        quisquam exercitationem cumque impedit. Quasi dolor quo harum veritatis,
        at dicta? Harum in est aut velit suscipit commodi, perspiciatis debitis
        consequatur cupiditate voluptatum.
      </p>
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!toggleTxt) {
            setToggleTxt(true);
          }
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>N'en ratez pas une miette !</h2>
        <form>
          <label htmlFor="email">Inscrivez-vous a la newslette</label>
          <input type="email" id="email" />
        </form>
      </animated.div>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        ducimus aut aliquam. Quae, maiores eum maxime repellendus, dolores
        tempora voluptates nulla alias delectus sequi laborum labore suscipit
        atque libero ipsum excepturi officia eius consequatur. Laboriosam vel
        fuga, porro iure quasi doloremque! Hic commodi debitis perferendis sunt
        alias nemo provident itaque velit laudantium ratione? Distinctio eum
        quidem soluta a architecto placeat excepturi unde aliquam sed animi, at,
        molestiae et perferendis voluptas ullam quod earum, ut similique vel id!
        Nobis harum laborum minus neque quasi doloribus ullam, aliquam dolorem
        nisi. Quo reprehenderit voluptates soluta quidem fuga eveniet aliquid
        dignissimos expedita eius officia quae repellat iusto odio, corrupti
        fugit ducimus porro numquam provident fugiat, accusamus dolor! Excepturi
        reiciendis amet ullam expedita at natus doloremque praesentium autem
        magnam quisquam? Error, deserunt quasi? Minus architecto iure autem
        debitis eveniet inventore ex. Quam molestiae perspiciatis veritatis
        nostrum quo quos cum neque quod molestias, sit officiis excepturi veniam
        reprehenderit ex sequi voluptatem cupiditate suscipit hic sunt odio
        ipsum rerum. Voluptas odit corrupti soluta praesentium, voluptatem nulla
        hic excepturi sapiente perferendis molestiae reiciendis cum, illo
        quisquam exercitationem cumque impedit. Quasi dolor quo harum veritatis,
        at dicta? Harum in est aut velit suscipit commodi, perspiciatis debitis
        consequatur cupiditate voluptatum.
      </p>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        ducimus aut aliquam. Quae, maiores eum maxime repellendus, dolores
        tempora voluptates nulla alias delectus sequi laborum labore suscipit
        atque libero ipsum excepturi officia eius consequatur. Laboriosam vel
        fuga, porro iure quasi doloremque! Hic commodi debitis perferendis sunt
        alias nemo provident itaque velit laudantium ratione? Distinctio eum
        quidem soluta a architecto placeat excepturi unde aliquam sed animi, at,
        molestiae et perferendis voluptas ullam quod earum, ut similique vel id!
        Nobis harum laborum minus neque quasi doloribus ullam, aliquam dolorem
        nisi. Quo reprehenderit voluptates soluta quidem fuga eveniet aliquid
        dignissimos expedita eius officia quae repellat iusto odio, corrupti
        fugit ducimus porro numquam provident fugiat, accusamus dolor! Excepturi
        reiciendis amet ullam expedita at natus doloremque praesentium autem
        magnam quisquam? Error, deserunt quasi? Minus architecto iure autem
        debitis eveniet inventore ex. Quam molestiae perspiciatis veritatis
        nostrum quo quos cum neque quod molestias, sit officiis excepturi veniam
        reprehenderit ex sequi voluptatem cupiditate suscipit hic sunt odio
        ipsum rerum. Voluptas odit corrupti soluta praesentium, voluptatem nulla
        hic excepturi sapiente perferendis molestiae reiciendis cum, illo
        quisquam exercitationem cumque impedit. Quasi dolor quo harum veritatis,
        at dicta? Harum in est aut velit suscipit commodi, perspiciatis debitis
        consequatur cupiditate voluptatum.
      </p>
      <p className="scroll-txt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        ducimus aut aliquam. Quae, maiores eum maxime repellendus, dolores
        tempora voluptates nulla alias delectus sequi laborum labore suscipit
        atque libero ipsum excepturi officia eius consequatur. Laboriosam vel
        fuga, porro iure quasi doloremque! Hic commodi debitis perferendis sunt
        alias nemo provident itaque velit laudantium ratione? Distinctio eum
        quidem soluta a architecto placeat excepturi unde aliquam sed animi, at,
        molestiae et perferendis voluptas ullam quod earum, ut similique vel id!
        Nobis harum laborum minus neque quasi doloribus ullam, aliquam dolorem
        nisi. Quo reprehenderit voluptates soluta quidem fuga eveniet aliquid
        dignissimos expedita eius officia quae repellat iusto odio, corrupti
        fugit ducimus porro numquam provident fugiat, accusamus dolor! Excepturi
        reiciendis amet ullam expedita at natus doloremque praesentium autem
        magnam quisquam? Error, deserunt quasi? Minus architecto iure autem
        debitis eveniet inventore ex. Quam molestiae perspiciatis veritatis
        nostrum quo quos cum neque quod molestias, sit officiis excepturi veniam
        reprehenderit ex sequi voluptatem cupiditate suscipit hic sunt odio
        ipsum rerum. Voluptas odit corrupti soluta praesentium, voluptatem nulla
        hic excepturi sapiente perferendis molestiae reiciendis cum, illo
        quisquam exercitationem cumque impedit. Quasi dolor quo harum veritatis,
        at dicta? Harum in est aut velit suscipit commodi, perspiciatis debitis
        consequatur cupiditate voluptatum.
      </p>
    </div>
  );
}
