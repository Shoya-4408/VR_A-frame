// 木を生成する場所を取得
const forest = document.querySelector("#forest");
// 雑草を生成する場所を取得
const grasses = document.querySelector("#grasses");
// 花を生成する場所を取得
const flowers = document.querySelector("#flowers");


    // 木を作る関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    function createTree(x, z, size) {

    const tree = document.createElement("a-entity");

    // 木全体の位置と大きさ
    tree.setAttribute("position", `${x} 0 ${z}`);
    tree.setAttribute("scale", `${size} ${size} ${size}`);
    // 木の幹
    const trunk = document.createElement("a-cylinder");
    trunk.setAttribute("position", "0 1 0");
    trunk.setAttribute("radius", "0.25");
    trunk.setAttribute("height", "2");
    trunk.setAttribute("color", "#79502B");
    tree.appendChild(trunk);
    // 葉：上段
    const top = document.createElement("a-cone");
    top.setAttribute("position", "0 3.2 0");
    top.setAttribute("radius-bottom", "0.8");
    top.setAttribute("radius-top", "0");
    top.setAttribute("height", "1.6");
    top.setAttribute("color", "#4C9A45");
    tree.appendChild(top);
    // 葉：中段
    const middle = document.createElement("a-cone");
    middle.setAttribute("position", "0 2.5 0");
    middle.setAttribute("radius-bottom", "1.1");
    middle.setAttribute("radius-top", "0");
    middle.setAttribute("height", "1.6");
    middle.setAttribute("color", "#39843B");
    tree.appendChild(middle);
    // 葉：下段
    const bottom = document.createElement("a-cone");
    bottom.setAttribute("position", "0 1.8 0");
    bottom.setAttribute("radius-bottom", "1.4");
    bottom.setAttribute("radius-top", "0");
    bottom.setAttribute("height", "1.6");
    bottom.setAttribute("color", "#287334");
    tree.appendChild(bottom);

    // 完成した木を森林に追加
    forest.appendChild(tree);
    }

    // 木をランダムに生成
    for (let i = 0; i < 300; i++) {
    const x = Math.random() * 95 - 47.5;
    const z = Math.random() * 95 - 47.5;
    const size = Math.random() * 0.8 + 1.2;
    createTree(x, z, size);
    }
    // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    // 雑草を作る関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    function createGrass(x, z) {

    const grass = document.createElement("a-entity");

    // 雑草全体の位置
    grass.setAttribute("position", `${x} 0 ${z}`);
    // 1本目
    const blade1 = document.createElement("a-cone");
    blade1.setAttribute("position", "0 0.3 0");
    blade1.setAttribute("radius-bottom", "0.05");
    blade1.setAttribute("radius-top", "0");
    blade1.setAttribute("height", "0.6");
    blade1.setAttribute("color", "#3D853A");
    grass.appendChild(blade1);
    // 2本目
    const blade2 = document.createElement("a-cone");
    blade2.setAttribute("position", "0.15 0.4 0.1");
    blade2.setAttribute("radius-bottom", "0.05");
    blade2.setAttribute("radius-top", "0");
    blade2.setAttribute("height", "0.8");
    blade2.setAttribute("color", "#559B45");
    grass.appendChild(blade2);
    // 3本目
    const blade3 = document.createElement("a-cone");
    blade3.setAttribute("position", "-0.15 0.25 -0.1");
    blade3.setAttribute("radius-bottom", "0.05");
    blade3.setAttribute("radius-top", "0");
    blade3.setAttribute("height", "0.5");
    blade3.setAttribute("color", "#4B8B32");
    grass.appendChild(blade3);
    // 4本目
    const blade4 = document.createElement("a-cone");
    blade4.setAttribute("position", "0.1 0.35 -0.15");
    blade4.setAttribute("radius-bottom", "0.05");
    blade4.setAttribute("radius-top", "0");
    blade4.setAttribute("height", "0.7");
    blade4.setAttribute("color", "#70A94D");
    grass.appendChild(blade4);
    // 5本目
    const blade5 = document.createElement("a-cone");
    blade5.setAttribute("position", "-0.1 0.45 0.15");
    blade5.setAttribute("radius-bottom", "0.05");
    blade5.setAttribute("radius-top", "0");
    blade5.setAttribute("height", "0.9");
    blade5.setAttribute("color", "#347A34");
    grass.appendChild(blade5);

    // 完成した雑草を追加
    grasses.appendChild(grass);
    }

    // 雑草をランダムに生成
    for (let i = 0; i < 500; i++) {
    const x = Math.random() * 95 - 47.5;
    const z = Math.random() * 95 - 47.5;
    createGrass(x, z);
    }
    // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    // 花を作る関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    function createFlower(x, z) {

    const flower = document.createElement("a-entity");

    // 花全体の位置
    flower.setAttribute("position", `${x} 0 ${z}`);
    // 茎
    const stem = document.createElement("a-cylinder");
    stem.setAttribute("position", "0 0.3 0");
    stem.setAttribute("radius", "0.04");
    stem.setAttribute("height", "0.6");
    stem.setAttribute("color", "#358A43");
    flower.appendChild(stem);
    // 花弁1
    const petal1 = document.createElement("a-sphere");
    petal1.setAttribute("position", "0 0.8 0");
    petal1.setAttribute("radius", "0.15");
    petal1.setAttribute("scale", "0.5 1.25 0.5");
    petal1.setAttribute("color", "#FF69B4");
    flower.appendChild(petal1);
    // 花弁2
    const petal2 = document.createElement("a-sphere");
    petal2.setAttribute("position", "0.17 0.75 0");
    petal2.setAttribute("radius", "0.15");
    petal2.setAttribute("scale", "0.5 1.25 0.5");
    petal2.setAttribute("rotation", "0 0 -45");
    petal2.setAttribute("color", "#FF69B4");
    flower.appendChild(petal2);
    // 花弁3
    const petal3 = document.createElement("a-sphere");
    petal3.setAttribute("position", "0.15 0.5 0");
    petal3.setAttribute("radius", "0.15");
    petal3.setAttribute("scale", "0.5 1.25 0.5");
    petal3.setAttribute("rotation", "0 0 45");
    petal3.setAttribute("color", "#FF69B4");
    flower.appendChild(petal3);
    // 花弁4
    const petal4 = document.createElement("a-sphere");
    petal4.setAttribute("position", "-0.15 0.5 0");
    petal4.setAttribute("radius", "0.15");
    petal4.setAttribute("scale", "0.5 1.25 0.5");
    petal4.setAttribute("rotation", "0 0 -45");
    petal4.setAttribute("color", "#FF69B4");
    flower.appendChild(petal4);
    // 花弁5
    const petal5 = document.createElement("a-sphere");
    petal5.setAttribute("position", "-0.17 0.75 0");
    petal5.setAttribute("radius", "0.15");
    petal5.setAttribute("scale", "0.5 1.25 0.5");
    petal5.setAttribute("rotation", "0 0 45");
    petal5.setAttribute("color", "#FF69B4");
    flower.appendChild(petal5);
    // 花弁6
    const petal6 = document.createElement("a-sphere");
    petal6.setAttribute("position", "0.15 0.6 0");
    petal6.setAttribute("radius", "0.15");
    petal6.setAttribute("scale", "0.5 1.25 0.5");
    petal6.setAttribute("rotation", "0 0 -90");
    petal6.setAttribute("color", "#FF69B4");
    flower.appendChild(petal6);
    // 花弁7
    const petal7 = document.createElement("a-sphere");
    petal7.setAttribute("position", "-0.17 0.6 0");
    petal7.setAttribute("radius", "0.15");
    petal7.setAttribute("scale", "0.5 1.25 0.5");
    petal7.setAttribute("rotation", "0 0 90");
    petal7.setAttribute("color", "#FF69B4");
    flower.appendChild(petal7);
    // 花の中心
    const center = document.createElement("a-sphere");
    center.setAttribute("position", "0 0.6 0");
    center.setAttribute("radius", "0.1");
    center.setAttribute("color", "#FFD700");
    flower.appendChild(center);

    // 完成した花を追加
    flowers.appendChild(flower);
    }

    // 花をランダムに生成
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * 80 - 40;
      const z = Math.random() * 80 - 40;
      createFlower(x, z);
    } 
    // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


    // 惑星を生成
    const planets = document.querySelector("#planets");


    // 太陽を生成
    const sun = document.createElement("a-sphere");
    // 太陽の位置
    sun.setAttribute("position", "0 150 0");
    // 太陽の大きさ
    sun.setAttribute("radius", "50");
    // 太陽のテクスチャ
    sun.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_sun.jpg"
    );
    // 太陽を配置
    planets.appendChild(sun);


    // 水星の公転軌道の中心を作る
    const mercuryOrbit = document.createElement("a-entity");
    mercuryOrbit.setAttribute("position", "0 150 0");
    // 水星の球体を作る
    const mercury = document.createElement("a-sphere");
    // 水星の位置（軌道中心からの距離）
    mercury.setAttribute("position", "65 0 0");
    // 水星の大きさ
    mercury.setAttribute("radius", "4.0");
    // 水星の画像
    mercury.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_mercury.jpg"
    );
    // 水星を軌道の中心に追加
    mercuryOrbit.appendChild(mercury);
    // 軌道を惑星置き場に追加
    planets.appendChild(mercuryOrbit);

    // 水星の公転アニメーション
    mercuryOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 4810; " +
        "easing: linear; " +
        "loop: true"
    );


    // 金星の公転軌道の中心を作る
    const venusOrbit = document.createElement("a-entity");
    venusOrbit.setAttribute("position", "0 150 0");
    // 金星の球体を作る
    const venus = document.createElement("a-sphere");
    // 金星の位置（軌道中心からの距離）
    venus.setAttribute("position", "78 0 0");
    // 金星の大きさ
    venus.setAttribute("radius", "5.0");
    // 金星の画像
    venus.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_venus_atmosphere.jpg"
    );
    // 金星を軌道の中心に追加
    venusOrbit.appendChild(venus);
    // 軌道を惑星置き場に追加
    planets.appendChild(venusOrbit);

    // 金星の公転アニメーション
    venusOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 12300; " +
        "easing: linear; " +
        "loop: true"
    );


    // 地球の公転軌道の中心を作る
    const earthOrbit = document.createElement("a-entity");
    earthOrbit.setAttribute("position", "0 150 0");
    // 地球の球体を作る
    const earth = document.createElement("a-sphere");
    // 地球の位置（軌道中心からの距離）
    earth.setAttribute("position", "89 0 0");
    // 地球の大きさ
    earth.setAttribute("radius", "5.5");
    // 地球の画像
    earth.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_earth_daymap.jpg"
    );
    // 地球を軌道の中心に追加
    earthOrbit.appendChild(earth);
    // 軌道を惑星置き場に追加
    planets.appendChild(earthOrbit);

    // 地球の公転アニメーション
    earthOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 20000; " +
        "easing: linear; " +
        "loop: true"
    );


    // 火星の公転軌道の中心を作る
    const marsOrbit = document.createElement("a-entity");
    marsOrbit.setAttribute("position", "0 150 0");
    // 火星の球体を作る
    const mars = document.createElement("a-sphere");
    // 火星の位置（軌道中心からの距離）
    mars.setAttribute("position", "105 0 0");
    // 火星の大きさ
    mars.setAttribute("radius", "4.5");
    // 火星の画像
    mars.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_mars.jpg"
    );
    // 火星を軌道の中心に追加
    marsOrbit.appendChild(mars);
    // 軌道を惑星置き場に追加
    planets.appendChild(marsOrbit);

    // 火星の公転アニメーション
    marsOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 37620; " +
        "easing: linear; " +
        "loop: true"
    );


    // 木星の公転軌道の中心を作る
    const jupiterOrbit = document.createElement("a-entity");
    jupiterOrbit.setAttribute("position", "0 150 0");
    // 木星の球体を作る
    const jupiter = document.createElement("a-sphere");
    // 木星の位置（軌道中心からの距離）
    jupiter.setAttribute("position", "145 0 0");
    // 木星の大きさ
    jupiter.setAttribute("radius", "15");
    // 木星の画像
    jupiter.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_jupiter.jpg"
    );
    // 木星を軌道の中心に追加
    jupiterOrbit.appendChild(jupiter);
    // 軌道を惑星置き場に追加
    planets.appendChild(jupiterOrbit);

    // 木星の公転アニメーション
    jupiterOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 237200; " +
        "easing: linear; " +
        "loop: true"
    );


    // 土星の公転軌道の中心を作る
    const saturnOrbit = document.createElement("a-entity");
    saturnOrbit.setAttribute("position", "0 150 0");
    // 土星の球体を作る
    const saturn = document.createElement("a-sphere");
    // 土星の位置（軌道中心からの距離）
    saturn.setAttribute("position", "180 0 0");
    // 土星の大きさ
    saturn.setAttribute("radius", "13");
    // 土星の画像
    saturn.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_saturn.jpg"
    );
    // 土星を軌道の中心に追加
    saturnOrbit.appendChild(saturn);
    // 軌道を惑星置き場に追加
    planets.appendChild(saturnOrbit);

    // 土星の公転アニメーション
    saturnOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 589200; " +
        "easing: linear; " +
        "loop: true"
    );


    // 天王星の公転軌道の中心を作る
    const uranusOrbit = document.createElement("a-entity");
    uranusOrbit.setAttribute("position", "0 150 0");
    // 天王星の球体を作る
    const uranus = document.createElement("a-sphere");
    // 天王星の位置（軌道中心からの距離）
    uranus.setAttribute("position", "215 0 0");
    // 天王星の大きさ
    uranus.setAttribute("radius", "9");
    // 天王星の画像
    uranus.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_uranus.jpg"
    );
    // 天王星を軌道の中心に追加
    uranusOrbit.appendChild(uranus);
    // 軌道を惑星置き場に追加
    planets.appendChild(uranusOrbit);

    // 天王星の公転アニメーション
    uranusOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 1000000; " +
        "easing: linear; " +
        "loop: true"
    );


    // 海王星の公転軌道の中心を作る
    const neptuneOrbit = document.createElement("a-entity");
    neptuneOrbit.setAttribute("position", "0 150 0");
    // 海王星の球体を作る
    const neptune = document.createElement("a-sphere");
    // 海王星の位置（軌道中心からの距離）
    neptune.setAttribute("position", "245 0 0");
    // 海王星の大きさ
    neptune.setAttribute("radius", "9");
    // 海王星の画像
    neptune.setAttribute("material",
    "shader: flat; " +
    "src: images/2k_neptune.jpg "
    );
    // 海王星を軌道の中心に追加
    neptuneOrbit.appendChild(neptune);
    // 軌道を惑星置き場に追加
    planets.appendChild(neptuneOrbit);

    // 海王星の公転アニメーション
    neptuneOrbit.setAttribute("animation", 
        "property: rotation; " +
        "to: 0 360 0; " +
        "dur: 3290000; " +
        "easing: linear; " +
        "loop: true"
    );