/**
 *   Dropdown Functions
 *   Date: 11/10/2016
 *  Caretta Framework
 */
'use strict';

var Caretta;

Caretta = Caretta || {};

Caretta.Dropdown = (function () {

    /**
     * Close open dropdowns on click outside
     */
    let closeDropdowns = () => {
            document.onclick = function (e) {
                if (e.target !== null && Caretta.Helpers.findAncestor(e.target, 'caretta-dropdown') === null) {
                    let simpleDropdowns = document.getElementsByClassName('caretta-dropdown');

                    for (let i = 0; i < simpleDropdowns.length; i++) {
                        simpleDropdowns[i].classList.remove('open');
                    }
                }
            };
        },

        /**
         * Toggle dropdown parent class
         * e {object}       - event
         */
        toggleDropdown = (e) => {
            e.preventDefault();
            let simpleDropdowns = document.getElementsByClassName('caretta-dropdown'),
                divParrent = Caretta.Helpers.findAncestor(e.target, 'caretta-dropdown');

            for (let i = 0; i < simpleDropdowns.length; i++) {
                if (simpleDropdowns[i] !== divParrent) {
                    simpleDropdowns[i].classList.remove('open');
                }
            }

            if (divParrent.classList.contains('open')) {
                divParrent.classList.remove('open');
            } else {
                divParrent.classList.add('open');
            }
        },

        /**
         * Add click event to all dropdowns
         */
        setupSimpleDropdowns = () => {
            let dropdowns = document.querySelectorAll('[caretta-toggle="dropdown"]');

            for (let i = 0; i < dropdowns.length; i++) {
                dropdowns[i].addEventListener('click', toggleDropdown);
            }
        },

        /**
         * Add click event to dynamic added dropdowns
         */
        setupDynamicAddedSimpleDropdowns = () => {
            document.querySelector('body').addEventListener('click', function(event) {
                let carettaToggle = event.target.attributes.carettaToggle;

                if (carettaToggle !== undefined && carettaToggle.value === 'dropdown') {
                    toggleDropdown(event);
                }
            });
        };

    return {
        closeDropdowns: closeDropdowns,
        setupSimpleDropdowns: setupSimpleDropdowns,
        setupDynamicAddedSimpleDropdowns: setupDynamicAddedSimpleDropdowns
    };
}());
