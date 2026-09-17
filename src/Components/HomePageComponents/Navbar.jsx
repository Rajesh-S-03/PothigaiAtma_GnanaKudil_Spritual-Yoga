import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../../assets/Yoga  (1).png";

import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaGlobe,
} from "react-icons/fa";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

const Navbar = () => {

  const whatsappMessage =
    "Hello Amirthalogam, I am interested in your programs. Please share more details. Thankyou";

  // =====================================================
  // STATES
  // =====================================================

  const [menuOpen, setMenuOpen] = useState(false);

  // Selected language in our custom dropdown
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Current React Router location
  const location = useLocation();


  // =====================================================
  // REFS
  // =====================================================

  // Google Translate ready state
  const googleReadyRef = useRef(false);

  // Prevent duplicate initialization
  const googleInitializingRef = useRef(false);

  // Always keep the latest selected language available
  // without waiting for React state update
  const currentLanguageRef = useRef("en");

  // Every new operation gets a unique number.
  // Old operations become invalid automatically.
  const operationIdRef = useRef(0);

  // Timers currently running
  const timersRef = useRef([]);

  // MutationObserver
  const observerRef = useRef(null);


  // =====================================================
  // TIMER MANAGEMENT
  // =====================================================

  const addTimer = (callback, delay) => {

    const timer = setTimeout(() => {

      timersRef.current =
        timersRef.current.filter(
          (item) => item !== timer
        );

      callback();

    }, delay);

    timersRef.current.push(timer);

    return timer;
  };


  const clearAllTimers = () => {

    timersRef.current.forEach((timer) => {
      clearTimeout(timer);
    });

    timersRef.current = [];
  };


  // =====================================================
  // HIDE GOOGLE TRANSLATE UI
  // =====================================================

  const hideGoogleTopBar = () => {

    // Google top-level wrapper
    const skipTranslateElements =
      document.querySelectorAll(
        "body > .skiptranslate"
      );

    skipTranslateElements.forEach((element) => {

      element.style.display = "none";
      element.style.visibility = "hidden";
      element.style.opacity = "0";
      element.style.height = "0";
      element.style.width = "0";
      element.style.overflow = "hidden";

    });


    // Google Translate iframe/banner
    const frames =
      document.querySelectorAll(
        "iframe.goog-te-banner-frame, .goog-te-banner-frame"
      );

    frames.forEach((frame) => {

      frame.style.display = "none";
      frame.style.visibility = "hidden";
      frame.style.opacity = "0";
      frame.style.height = "0";
      frame.style.width = "0";

    });


    // Remove Google body offset
    document.body.style.top = "0px";
    document.body.style.marginTop = "0px";

    document.documentElement.style.marginTop =
      "0px";
  };


  // =====================================================
  // GET GOOGLE TRANSLATE SELECT
  // =====================================================

  const getGoogleSelect = () => {

    return document.querySelector(
      ".goog-te-combo"
    );

  };


  // =====================================================
  // CHECK WHETHER CURRENT OPERATION IS STILL VALID
  // =====================================================

  const isOperationValid = (operationId) => {

    return (
      operationId === operationIdRef.current
    );

  };


  // =====================================================
  // TRIGGER GOOGLE TRANSLATE
  // =====================================================

  const triggerGoogleTranslate = (
    language
  ) => {

    const googleSelect =
      getGoogleSelect();

    if (!googleSelect) {
      return false;
    }


    googleSelect.value = language;

    googleSelect.dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );


    hideGoogleTopBar();

    return true;
  };


  // =====================================================
  // WAIT FOR GOOGLE TRANSLATE SELECT
  // =====================================================

  const waitForGoogleSelect = (
    operationId,
    callback
  ) => {

    let attempts = 0;

    const maxAttempts = 60;


    const check = () => {

      // Stop old operation
      if (!isOperationValid(operationId)) {
        return;
      }


      const googleSelect =
        getGoogleSelect();


      if (googleSelect) {

        googleReadyRef.current = true;

        callback(googleSelect);

        return;
      }


      attempts++;


      if (attempts >= maxAttempts) {
        return;
      }


      addTimer(
        check,
        200
      );

    };


    check();
  };


  // =====================================================
  // WAIT UNTIL GOOGLE FINISHES A LANGUAGE CHANGE
  // =====================================================

  const waitForGoogleLanguage = (
    expectedLanguage,
    operationId,
    callback
  ) => {

    let attempts = 0;

    const maxAttempts = 60;


    const check = () => {

      // Old operation
      if (!isOperationValid(operationId)) {
        return;
      }


      const googleSelect =
        getGoogleSelect();


      if (!googleSelect) {

        attempts++;

        if (attempts < maxAttempts) {

          addTimer(
            check,
            150
          );

        }

        return;
      }


      /*
       * Google Translate changes the selected value
       * asynchronously.
       *
       * We wait until the Google select actually
       * contains the language we requested.
       */

      if (
        googleSelect.value ===
        expectedLanguage
      ) {

        callback();

        return;
      }


      attempts++;


      if (attempts < maxAttempts) {

        addTimer(
          check,
          150
        );

      }

    };


    check();
  };


  // =====================================================
  // FORCE LANGUAGE TRANSLATION
  //
  // This is the important part.
  //
  // We do NOT simply wait 500ms and assume Google
  // has finished.
  //
  // We:
  //
  // 1. Reset Google to English
  // 2. Wait until Google actually changes to English
  // 3. Apply requested language
  // 4. Wait until Google accepts that language
  //
  // Therefore route navigation cannot accidentally
  // alternate between translated/untranslated pages.
  // =====================================================

  const forceGoogleTranslation = (
    language,
    operationId
  ) => {

    if (!isOperationValid(operationId)) {
      return;
    }


    const googleSelect =
      getGoogleSelect();


    if (!googleSelect) {
      return;
    }


    // =================================================
    // ENGLISH
    // =================================================

    if (language === "en") {

      googleSelect.value = "en";

      googleSelect.dispatchEvent(
        new Event("change", {
          bubbles: true,
        })
      );

      hideGoogleTopBar();

      return;
    }


    // =================================================
    // STEP 1
    // RESET TO ENGLISH
    // =================================================

    googleSelect.value = "en";

    googleSelect.dispatchEvent(
      new Event("change", {
        bubbles: true,
      })
    );

    hideGoogleTopBar();


    // =================================================
    // STEP 2
    // WAIT FOR GOOGLE TO FINISH ENGLISH RESET
    // =================================================

    waitForGoogleLanguage(
      "en",
      operationId,
      () => {

        // Make sure this operation is still active
        if (!isOperationValid(operationId)) {
          return;
        }


        // =================================================
        // STEP 3
        // APPLY REQUESTED LANGUAGE
        // =================================================

        const newGoogleSelect =
          getGoogleSelect();


        if (!newGoogleSelect) {
          return;
        }


        newGoogleSelect.value =
          language;


        newGoogleSelect.dispatchEvent(
          new Event("change", {
            bubbles: true,
          })
        );


        hideGoogleTopBar();


        // =================================================
        // STEP 4
        // WAIT UNTIL GOOGLE ACCEPTS LANGUAGE
        // =================================================

        waitForGoogleLanguage(
          language,
          operationId,
          () => {

            if (
              !isOperationValid(
                operationId
              )
            ) {
              return;
            }


            hideGoogleTopBar();


            /*
             * Extra cleanup after Google finishes
             * translating the newly rendered page.
             */

            addTimer(() => {

              if (
                !isOperationValid(
                  operationId
                )
              ) {
                return;
              }

              hideGoogleTopBar();

            }, 300);

          }
        );

      }
    );
  };


  // =====================================================
  // INITIALIZE GOOGLE TRANSLATE
  // =====================================================

  useEffect(() => {

    let isMounted = true;


    // -------------------------------------------------
    // GOOGLE CALLBACK
    // -------------------------------------------------

    const googleTranslateElementInit = () => {

      if (!isMounted) {
        return;
      }


      if (
        !window.google ||
        !window.google.translate
      ) {
        return;
      }


      const translateElement =
        document.getElementById(
          "google_translate_element"
        );


      if (!translateElement) {
        return;
      }


      // ------------------------------------------------
      // Already initialized
      // ------------------------------------------------

      if (
        translateElement.dataset.initialized ===
        "true"
      ) {

        googleReadyRef.current = true;

        return;
      }


      // Prevent duplicate initialization
      if (
        googleInitializingRef.current
      ) {
        return;
      }


      googleInitializingRef.current = true;


      // ------------------------------------------------
      // INITIALIZE GOOGLE TRANSLATE ONCE
      // ------------------------------------------------

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",

          includedLanguages:
            "en,ta,hi,te,ml",

          autoDisplay: false,
        },

        "google_translate_element"
      );


      translateElement.dataset.initialized =
        "true";


      googleReadyRef.current = true;


      // ------------------------------------------------
      // Start with English
      // ------------------------------------------------

      const operationId =
        ++operationIdRef.current;


      addTimer(() => {

        if (!isMounted) {
          return;
        }


        waitForGoogleSelect(
          operationId,
          (googleSelect) => {

            googleSelect.value = "en";

            googleSelect.dispatchEvent(
              new Event("change", {
                bubbles: true,
              })
            );

            hideGoogleTopBar();

          }
        );

      }, 800);

    };


    // -------------------------------------------------
    // Store callback
    // -------------------------------------------------

    window.googleTranslateElementInit =
      googleTranslateElementInit;


    // -------------------------------------------------
    // Google already loaded
    // -------------------------------------------------

    if (
      window.google &&
      window.google.translate
    ) {

      googleTranslateElementInit();

    } else {

      // ------------------------------------------------
      // Check existing script
      // ------------------------------------------------

      const existingScript =
        document.querySelector(
          'script[data-google-translate="true"]'
        );


      // ------------------------------------------------
      // Load only once
      // ------------------------------------------------

      if (!existingScript) {

        const script =
          document.createElement(
            "script"
          );


        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";


        script.async = true;


        script.setAttribute(
          "data-google-translate",
          "true"
        );


        document.body.appendChild(
          script
        );

      }

    }


    // =================================================
    // GOOGLE DOM OBSERVER
    // =================================================

    const observer =
      new MutationObserver(() => {

        hideGoogleTopBar();

      });


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true,
      }
    );


    observerRef.current =
      observer;


    // Hide immediately
    hideGoogleTopBar();


    // =================================================
    // CLEANUP
    // =================================================

    return () => {

      isMounted = false;

      clearAllTimers();

      observer.disconnect();

      observerRef.current = null;

    };

  }, []);


  // =====================================================
  // RE-APPLY LANGUAGE AFTER REACT ROUTER NAVIGATION
  // =====================================================

  useEffect(() => {

    // Google not ready yet
    if (!googleReadyRef.current) {
      return;
    }


    // -------------------------------------------------
    // Create NEW operation
    // -------------------------------------------------

    const operationId =
      ++operationIdRef.current;


    // -------------------------------------------------
    // Cancel old timers
    // -------------------------------------------------

    clearAllTimers();


    // -------------------------------------------------
    // Give React Router time to render the NEW page
    // -------------------------------------------------

    addTimer(() => {

      if (
        !isOperationValid(
          operationId
        )
      ) {
        return;
      }


      const language =
        currentLanguageRef.current;


      // ------------------------------------------------
      // Wait for Google Translate engine
      // ------------------------------------------------

      waitForGoogleSelect(
        operationId,
        () => {

          if (
            !isOperationValid(
              operationId
            )
          ) {
            return;
          }


          // ------------------------------------------------
          // IMPORTANT
          //
          // Always synchronize the complete newly rendered
          // React page with the currently selected language.
          // ------------------------------------------------

          forceGoogleTranslation(
            language,
            operationId
          );

        }
      );

    }, 500);


    // -------------------------------------------------
    // No timer cleanup here.
    //
    // The next navigation creates a new operation ID
    // and invalidates this operation.
    // -------------------------------------------------

  }, [location.pathname]);


  // =====================================================
  // LANGUAGE CHANGE
  // =====================================================

  const handleLanguageChange = (
    event
  ) => {

    const language =
      event.target.value;


    // -------------------------------------------------
    // Update React state
    // -------------------------------------------------

    setSelectedLanguage(
      language
    );


    // -------------------------------------------------
    // Update ref immediately
    // -------------------------------------------------

    currentLanguageRef.current =
      language;


    // -------------------------------------------------
    // New operation
    // -------------------------------------------------

    const operationId =
      ++operationIdRef.current;


    // -------------------------------------------------
    // Cancel old timers
    // -------------------------------------------------

    clearAllTimers();


    // -------------------------------------------------
    // Wait for Google
    // -------------------------------------------------

    waitForGoogleSelect(
      operationId,
      () => {

        if (
          !isOperationValid(
            operationId
          )
        ) {
          return;
        }


        // ------------------------------------------------
        // Direct language change
        //
        // Tamil → Telugu
        // Telugu → Malayalam
        // Malayalam → Hindi
        // etc.
        // ------------------------------------------------

        triggerGoogleTranslate(
          language
        );


        // ------------------------------------------------
        // Make sure Google has accepted the new language
        // ------------------------------------------------

        waitForGoogleLanguage(
          language,
          operationId,
          () => {

            if (
              !isOperationValid(
                operationId
              )
            ) {
              return;
            }


            hideGoogleTopBar();

          }
        );

      }
    );

  };


  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMenu = () => {
    setMenuOpen(false);
  };


  // =====================================================
  // JSX
  // =====================================================

  return (
    <nav className="navbar">

      {/* BRAND */}
      <div className="brand">

        <img
          src={logo}
          alt="Amirthalogam"
          className="brand-logo"
        />

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          Amirthalogam
        </NavLink>

      </div>


      {/* CUSTOM LANGUAGE SELECTOR */}
      <div className="language-container">

        <FaGlobe className="language-icon" />

        <select
          className="custom-language-select"
          value={selectedLanguage}
          onChange={
            handleLanguageChange
          }
          aria-label="Select Language"
        >

          <option value="en">
            English
          </option>

          <option value="ta">
            தமிழ்
          </option>

          <option value="hi">
            हिन्दी
          </option>

          <option value="te">
            తెలుగు
          </option>

          <option value="ml">
            മലയാളം
          </option>

        </select>

      </div>


      {/* HIDDEN GOOGLE TRANSLATE ENGINE */}
      <div
        id="google_translate_element"
        className="google-translate-hidden"
      ></div>


      {/* MOBILE MENU BUTTON */}
      <div className="mobile-top-controls">

        <div
          className="mobile-menu"
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >

          {menuOpen
            ? <FaTimes />
            : <FaBars />
          }

        </div>

      </div>


      {/* NAVIGATION LINKS */}
      <ul
        className={`nav-links ${
          menuOpen
            ? "show"
            : ""
        }`}
      >

        <li>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About Us
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/trainings"
            onClick={closeMenu}
          >
            Training Programs
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/events"
            onClick={closeMenu}
          >
            Events
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/activities"
            onClick={closeMenu}
          >
            Social Welfare Activities
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
        </li>


        {/* MOBILE WHATSAPP */}
        <li className="mobile-whatsapp-item">

          <a
            href={`https://wa.me/918300366411?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
            aria-label="WhatsApp"
          >

            <FaWhatsapp
              className="whatsapp-logo"
            />

          </a>

        </li>

      </ul>

    </nav>
  );
};


export default Navbar;