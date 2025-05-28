import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import MatterWrap from 'matter-wrap';

const MatterCanvas = () => {


    const canvasRef = useRef(null);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const runnerRef = useRef(null);

    useEffect(() => {
        // Register Matter.js plugins
        Matter.use(MatterAttractors);
        Matter.use(MatterWrap);

        // Module aliases
        const Engine = Matter.Engine;
        const Events = Matter.Events;
        const Runner = Matter.Runner;
        const Render = Matter.Render;
        const World = Matter.World;
        const Body = Matter.Body;
        const Mouse = Matter.Mouse;
        const Common = Matter.Common;
        const Bodies = Matter.Bodies;

        // Create engine
        const engine = Engine.create();
        engineRef.current = engine;

        engine.world.gravity.y = 0;
        engine.world.gravity.x = 0;
        engine.world.gravity.scale = 0.1;

        // Create renderer
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                showVelocity: false,
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: "transparent",
                wireframeBackground: "transparent",
                timeScale: 1,


            }
        });
        renderRef.current = render;

        // Create runner
        const runner = Runner.create();
        runnerRef.current = runner;

        // Create demo scene
        const world = engine.world;
        world.gravity.scale = 0;

        // Create a body with an attractor
        const attractiveBody = Bodies.circle(
            render.options.width / 2,
            render.options.height / 2,
            Math.max(window.innerWidth / 25, window.innerHeight / 25) / 2,
            {
                render: {
                    fillStyle: '#057DCD',
                    strokeStyle: '#000',
                    lineWidth: 0,


                },
                isStatic: true,
                plugin: {
                    attractors: [
                        function (bodyA, bodyB) {
                            return {
                                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                                y: (bodyA.position.y - bodyB.position.y) * 1e-6
                            };
                        }
                    ]
                }
            }
        );

        World.add(world, attractiveBody);

        // Add bodies to be attracted
        for (let i = 0; i < 60; i++) {
            let x = Common.random(0, render.options.width);
            let y = Common.random(0, render.options.height);
            let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
            let polygonNumber = Common.random(3, 6);

            const body = Bodies.polygon(
                x,
                y,
                polygonNumber,
                s,
                {
                    mass: s / 20,
                    friction: 0,
                    frictionAir: 0.02,
                    angle: Math.round(Math.random() * 360),
                    render: {
                        fillStyle: '#222222',
                        strokeStyle: '#000000',
                        lineWidth: 2
                    }
                }
            );

            World.add(world, body);

            let r = Common.random(0, 1);

            const smallCircle = Bodies.circle(
                x,
                y,
                Common.random(2, 8),
                {
                    mass: 0.1,
                    friction: 0,
                    frictionAir: 0.01,
                    render: {
                        fillStyle: r > 0.3 ? '#27292d' : '#444444',
                        strokeStyle: '#27292d',
                        lineWidth: 2
                    }
                }
            );

            World.add(world, smallCircle);

            const mediumCircle = Bodies.circle(
                x,
                y,
                Common.random(2, 20),
                {
                    mass: 6,
                    friction: 0,
                    frictionAir: 0,
                    render: {
                        fillStyle: r > 0.3 ? '#057DCD' : '#222222',
                        strokeStyle: r > 0.3 ? '#057DCD' : '#222222',
                        lineWidth: 4
                    }
                }
            );

            World.add(world, mediumCircle);

            const largeCircle = Bodies.circle(
                x,
                y,
                Common.random(2, 30),
                {
                    mass: 0.2,
                    friction: 0.6,
                    frictionAir: 0.8,
                    render: {
                        fillStyle: ' hsla(219,32%,16%,0.8)',
                        strokeStyle: ' hsla(219,32%,16%,0.8)',
                        lineWidth: 3
                    }
                }
            );

            World.add(world, largeCircle);
        }

        // Add mouse control

        const mouse = Mouse.create(render.canvas);

        Events.on(engine, 'afterUpdate', function () {
            if (!mouse.position.x) return;

            // Smoothly move the attractor body towards the mouse
            Body.translate(attractiveBody, {
                x: (mouse.position.x - attractiveBody.position.x) * 0.12,
                y: (mouse.position.y - attractiveBody.position.y) * 0.12
            });
        });

        Events.on(mouse, 'mousemove', function (event) {
            mouse.position.x = event.position.x;
            mouse.position.y = event.position.y;
        });

        // Start the engine and renderer
        Runner.run(runner, engine);
        Render.run(render);

        // Handle window resize
        const handleResize = () => {
            render.options.width = window.innerWidth;
            render.options.height = window.innerHeight;
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;

            // Update attractor position on resize
            Body.setPosition(attractiveBody, {
                x: render.options.width / 2,
                y: render.options.height / 20
            });
        };

        // Debounce function for resize event
        const debounce = (func, wait) => {
            let timeout;
            return function () {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        };

        // Add resize event listener
        const debouncedResize = debounce(handleResize, 250);
        window.addEventListener('resize', debouncedResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', debouncedResize);

            // Stop the engine and renderer
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world);
            Engine.clear(engine);

            render.canvas.remove();
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };
    }, []);



    return (
        <div

            ref={canvasRef}

            id="wrapper-canvas"
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,


            }}
        />
    );
};

export default MatterCanvas;