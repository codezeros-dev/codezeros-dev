(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/codezeros/project/codezeros/spacechain-token-migration/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2XdG":
    /*!**************************************************!*\
      !*** ./src/app/my-wallet/my-wallet.component.ts ***!
      \**************************************************/

    /*! exports provided: MyWalletComponent */

    /***/
    function XdG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyWalletComponent", function () {
        return MyWalletComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api-wallet-connect.service */
      "x/wV");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MyWalletComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyWalletComponent_div_21_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.createUpgrader();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Upgrader Vault");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MyWalletComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyWalletComponent_div_22_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.sendSpcToVault();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Send SPC to Vault");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MyWalletComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyWalletComponent_div_23_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.migrateV1tokens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Upgrade SPC v1 vault");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var MyWalletComponent = /*#__PURE__*/function () {
        function MyWalletComponent(router, _route, apiWalletService, apiService, toaster) {
          _classCallCheck(this, MyWalletComponent);

          this.router = router;
          this._route = _route;
          this.apiWalletService = apiWalletService;
          this.apiService = apiService;
          this.toaster = toaster;
          this.show = 'step1';
          this.balance1 = 0;
          this.balance2 = 0;
          this.holdedBalance = 0;
          this.wallet = '';
          this.id = this._route.snapshot.params['id'];

          if (this.id && this.id != undefined) {
            var idArray = ['1', '2'];

            if (!idArray.includes(this.id)) {
              this.router.navigate(['/']);
            } else {
              if (this.id == 1) {
                this.wallet = 'Metamask';
                this.userAccount = this.apiService["export"]();

                if (this.userAccount != undefined && this.userAccount || this.userAccount.length) {} else {
                  this.router.navigate(['/']);
                }
              } else {
                this.wallet = 'WalletConnect';
              }
            }
          }
        }

        _createClass(MyWalletComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.wallet == 'Metamask')) {
                        _context2.next = 20;
                        break;
                      }

                      _context2.next = 3;
                      return this.apiService["export"]();

                    case 3:
                      this.userAccount = _context2.sent;
                      _context2.next = 6;
                      return this.apiService.exportInstance1();

                    case 6:
                      this.contractInstance1 = _context2.sent;
                      _context2.next = 9;
                      return this.apiService.exportInstance2();

                    case 9:
                      this.contractInstance2 = _context2.sent;
                      console.log(this.userAccount);

                      if (!this.userAccount) {
                        _context2.next = 18;
                        break;
                      }

                      _context2.next = 14;
                      return this.balanceOf1(this.userAccount, this.contractInstance1);

                    case 14:
                      _context2.next = 16;
                      return this.balanceOf2(this.userAccount, this.contractInstance2);

                    case 16:
                      _context2.next = 18;
                      return this.checkProcess(this.userAccount, this.contractInstance1, this.contractInstance2);

                    case 18:
                      _context2.next = 21;
                      break;

                    case 20:
                      this.apiWalletService.getBehaviorView().subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!(data && data != undefined)) {
                                    _context.next = 17;
                                    break;
                                  }

                                  if (!data['connected']) {
                                    _context.next = 16;
                                    break;
                                  }

                                  this.userAccount = data['walletAddress'];
                                  this.chainId = data['chainId'];
                                  _context.next = 6;
                                  return this.apiWalletService.exportInstance1(data['networkName']);

                                case 6:
                                  this.contractInstance1 = _context.sent;
                                  _context.next = 9;
                                  return this.apiWalletService.exportInstance2(data['networkName']);

                                case 9:
                                  this.contractInstance2 = _context.sent;
                                  this.apiWalletService.walletConnectInit();
                                  this.balanceOfWallet1(this.contractInstance1, data['walletAddress']);
                                  this.balanceOfWallet2(this.contractInstance2, data['walletAddress']);
                                  this.checkProcessWallet(this.userAccount, this.contractInstance1, this.contractInstance2);
                                  _context.next = 17;
                                  break;

                                case 16:
                                  this.router.navigate(['/']);

                                case 17:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 21:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "balanceOf1",
          value: function balanceOf1(walletAddress, contractInstance) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.apiService.getBalance1(walletAddress, contractInstance).then(function (data) {
                        if (data) {
                          console.log('11', data);
                          _this2.balance1 = data.toFixed(2);
                        }
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "balanceOf2",
          value: function balanceOf2(walletAddress, contractInstance) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.apiService.getBalance2(walletAddress, contractInstance).then(function (data) {
                        if (data) {
                          _this3.balance2 = data.toFixed(2); // Math.round(data * 100) / 100
                        }
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //for start=------------ walletConnect

        }, {
          key: "balanceOfWallet1",
          value: function balanceOfWallet1(contractInstance, walletAddress) {
            var _this4 = this;

            this.apiWalletService.getBalance1(contractInstance, walletAddress).then(function (data) {
              if (data) {
                _this4.balance1 = data.toFixed(2);
              }
            });
          }
        }, {
          key: "balanceOfWallet2",
          value: function balanceOfWallet2(contractInstance, walletAddress) {
            var _this5 = this;

            this.apiWalletService.getBalance2(contractInstance, walletAddress).then(function (data) {
              if (data) {
                _this5.balance2 = data.toFixed(2);
              }
            });
          }
        }, {
          key: "checkProcessWallet",
          value: function checkProcessWallet(walletAddress, contractInstance1, contractInstance2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.getWalletTokenUpgrader(walletAddress, contractInstance2);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getWalletTokenUpgrader",
          value: function getWalletTokenUpgrader(walletAddress, contractInstance2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.apiWalletService.tokenUpgrader(walletAddress, contractInstance2).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var _this7 = this;

                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  console.log('--------------da', data);

                                  if (!(data && data == '0x0000000000000000000000000000000000000000')) {
                                    _context7.next = 5;
                                    break;
                                  }

                                  this.show = 'step1'; // Math.round(data * 100) / 100

                                  _context7.next = 9;
                                  break;

                                case 5:
                                  if (!data) {
                                    _context7.next = 9;
                                    break;
                                  }

                                  this.uniqueAddress = data;
                                  _context7.next = 9;
                                  return this.apiWalletService.getBalance1(this.contractInstance1, this.uniqueAddress).then(function (data1) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                      var _this8 = this;

                                      return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                        while (1) {
                                          switch (_context6.prev = _context6.next) {
                                            case 0:
                                              if (!(data1 && data1 > 0)) {
                                                _context6.next = 5;
                                                break;
                                              }

                                              _context6.next = 3;
                                              return this.apiWalletService.getBalance2(this.contractInstance2, this.userAccount).then(function (data2) {
                                                if (data2 && data2 > 0) {} else {
                                                  _this8.show = 'step3'; // this.show = 'step2'
                                                }
                                              });

                                            case 3:
                                              _context6.next = 6;
                                              break;

                                            case 5:
                                              this.show = 'step2';

                                            case 6:
                                            case "end":
                                              return _context6.stop();
                                          }
                                        }
                                      }, _callee6, this);
                                    }));
                                  });

                                case 9:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          } //end----------- walletConnect

        }, {
          key: "checkProcess",
          value: function checkProcess(walletAddress, contractInstance1, contractInstance2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.getTokenUpgrader(walletAddress, contractInstance2);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getTokenUpgrader",
          value: function getTokenUpgrader(walletAddress, contractInstance2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.apiService.tokenUpgrader(walletAddress, contractInstance2).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                          var _this10 = this;

                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  if (!(data && data == '0x0000000000000000000000000000000000000000')) {
                                    _context11.next = 4;
                                    break;
                                  }

                                  this.show = 'step1'; // Math.round(data * 100) / 100

                                  _context11.next = 8;
                                  break;

                                case 4:
                                  if (!data) {
                                    _context11.next = 8;
                                    break;
                                  }

                                  this.uniqueAddress = data;
                                  _context11.next = 8;
                                  return this.apiService.getBalance1(this.uniqueAddress, this.contractInstance1).then(function (data1) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                                      var _this11 = this;

                                      return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                        while (1) {
                                          switch (_context10.prev = _context10.next) {
                                            case 0:
                                              if (!(data1 && data1 > 0)) {
                                                _context10.next = 5;
                                                break;
                                              }

                                              _context10.next = 3;
                                              return this.apiService.getBalance2(this.userAccount, this.contractInstance2).then(function (data2) {
                                                if (data2 && data2 > 0) {} else {
                                                  _this11.show = 'step3'; // this.show = 'step2'
                                                }
                                              });

                                            case 3:
                                              _context10.next = 6;
                                              break;

                                            case 5:
                                              this.show = 'step2';

                                            case 6:
                                            case "end":
                                              return _context10.stop();
                                          }
                                        }
                                      }, _callee10, this);
                                    }));
                                  });

                                case 8:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getHoldedBalance",
          value: function getHoldedBalance(uniqueAddress, contractInstance1) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.apiService.getBalance1(uniqueAddress, contractInstance1).then(function (data) {
                        if (data && data > 0) {
                          _this12.show = 'step3';
                        }
                      });

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } //click event  1

        }, {
          key: "createUpgrader",
          value: function createUpgrader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (!(this.id && this.id == '1')) {
                        _context14.next = 5;
                        break;
                      }

                      _context14.next = 3;
                      return this.apiService.createUpgrader(this.contractInstance2, this.userAccount).then(function (data) {
                        if (data) {
                          _this13.uniqueAddress = data;
                          _this13.show = 'step2';
                        }
                      });

                    case 3:
                      _context14.next = 7;
                      break;

                    case 5:
                      _context14.next = 7;
                      return this.apiWalletService.createUpgrader(this.contractInstance2, this.userAccount, this.chainId).then(function (data) {
                        if (data && data != null && data != undefined) {
                          _this13.uniqueAddress = data;
                          _this13.show = 'step2';
                        }
                      })["catch"](function (er) {});

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } //click event  2

        }, {
          key: "sendSpcToVault",
          value: function sendSpcToVault() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      console.log('-------------------------', this.id);

                      if (!(this.id && this.id == '1')) {
                        _context17.next = 7;
                        break;
                      }

                      console.log('--------------------------------1--');
                      _context17.next = 5;
                      return this.apiService.getBalance1(this.uniqueAddress, this.contractInstance1).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  if (data && data > 0) {} else {
                                    console.log('--------------------------------2--');
                                    this.transfer(this.uniqueAddress, this.balance1, this.contractInstance1);
                                  }

                                case 1:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15, this);
                        }));
                      });

                    case 5:
                      _context17.next = 9;
                      break;

                    case 7:
                      _context17.next = 9;
                      return this.apiWalletService.getBalance1(this.contractInstance1, this.uniqueAddress).then(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                          return regeneratorRuntime.wrap(function _callee16$(_context16) {
                            while (1) {
                              switch (_context16.prev = _context16.next) {
                                case 0:
                                  if (data && data > 0) {} else {
                                    this.transferWallet(this.uniqueAddress, this.balance1, this.contractInstance1, this.chainId);
                                  }

                                case 1:
                                case "end":
                                  return _context16.stop();
                              }
                            }
                          }, _callee16, this);
                        }));
                      });

                    case 9:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          } // for  chrome extenstion

        }, {
          key: "transfer",
          value: function transfer(uniqueAddress, balance1, contractInstance1) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this15 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      console.log('--------------------------------3-');
                      _context18.next = 3;
                      return this.apiService.transfer(uniqueAddress, balance1, contractInstance1, this.userAccount).then(function (data) {
                        if (data) {
                          console.log('--------------------------------5-', data);
                          _this15.show = 'step3';
                        }
                      })["catch"](function (er) {});

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          } // for mobile wallet Connect

        }, {
          key: "transferWallet",
          value: function transferWallet(uniqueAddress, balance1, contractInstance1, chainId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this16 = this;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.apiWalletService.transfer(uniqueAddress, balance1, contractInstance1, this.userAccount, chainId).then(function (data) {
                        if (data) {
                          _this16.show = 'step3';
                        }
                      });

                    case 2:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          } //click event 3

        }, {
          key: "migrateV1tokens",
          value: function migrateV1tokens() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this17 = this;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      $('#please_wait').modal('show');

                      if (!(this.id && this.id == '1')) {
                        _context20.next = 6;
                        break;
                      }

                      _context20.next = 4;
                      return this.apiService.migrateV1tokens(this.contractInstance2, this.userAccount).then(function (data) {
                        if (data) {
                          $('#please_wait').modal('hide');
                          _this17.show = 'step4';
                        }
                      })["catch"](function (er) {
                        if (er && er.code) {
                          _this17.toaster.error(er.message);

                          $('#please_wait').modal('hide');
                        }

                        _this17.toaster.error();
                      });

                    case 4:
                      _context20.next = 8;
                      break;

                    case 6:
                      _context20.next = 8;
                      return this.apiWalletService.migrateV1tokens(this.contractInstance2, this.userAccount, this.chainId).then(function (data) {
                        if (data && data != null && data != undefined) {
                          $('#please_wait').modal('hide');
                          _this17.show = 'step4';
                        }
                      })["catch"](function (er) {
                        if (er && er.code) {
                          _this17.toaster.error(er.message);

                          $('#please_wait').modal('hide');
                        }

                        _this17.toaster.error();
                      });

                    case 8:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return MyWalletComponent;
      }();

      MyWalletComponent.ɵfac = function MyWalletComponent_Factory(t) {
        return new (t || MyWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__["ApiWalletConnectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
      };

      MyWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MyWalletComponent,
        selectors: [["app-my-wallet"]],
        decls: 39,
        vars: 5,
        consts: [[1, "your_account", "pdgn-tp-cmn"], [1, "container", "padding_23"], [1, "row", "justify-content-center", "text-center"], [1, "col-lg-7"], [1, "h1_text"], [1, "row", "balance_class"], [1, "col-md-6"], [1, "inner_account"], ["src", "../../assets/images/balance.png"], [1, "h2_text_white"], [1, "p_text_orange"], [1, "h2_text"], [1, "p_text"], ["class", "col-12", 4, "ngIf"], [1, "img_bottom"], ["src", "../../assets/images/Group2066.png", 1, "img-fluid"], ["id", "please_wait", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade", "common_modal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "modal_me", "text-center"], [1, "modal-header", "justify-content-center", "align-items-center"], ["id", "exampleModalCenterTitle", 1, "modal-title-2"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-md-12", "text-box"], [1, "col-12"], [1, "Upgrader_vault", "mt-4", 3, "click"], [1, "Upgrader_vault", "btn-danger", "mt-4", 3, "click"], [1, "Upgrader_vault", "btn-success", "mt-4", 3, "click"]],
        template: function MyWalletComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Your Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SPC V1 Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "SPC V2 Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MyWalletComponent_div_21_Template, 3, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MyWalletComponent_div_22_Template, 3, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MyWalletComponent_div_23_Template, 3, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h5", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Please wait...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Your SPC v1 token is upgrading to SPC v2 token ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.balance1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.balance2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show && ctx.show == "step1" && ctx.balance2 <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show && ctx.show == "step2" && ctx.balance2 <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show && ctx.show == "step3" && ctx.balance2 <= 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktd2FsbGV0L215LXdhbGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHIiwiZmlsZSI6InNyYy9hcHAvbXktd2FsbGV0L215LXdhbGxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1haW5faGVpZ2h0e1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzNzlweCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSAqLyJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyWalletComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-my-wallet',
            templateUrl: './my-wallet.component.html',
            styleUrls: ['./my-wallet.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__["ApiWalletConnectService"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    3:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    4:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    5:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    6:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    7:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    8:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api-wallet-connect.service */
      "x/wV");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(router, apiWalletService, route, apiService, toaster) {
          _classCallCheck(this, HomeComponent);

          this.router = router;
          this.apiWalletService = apiWalletService;
          this.route = route;
          this.apiService = apiService;
          this.toaster = toaster;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // TODO

        }, {
          key: "checkConnectedWallet",
          value: function checkConnectedWallet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.apiService["export"]();

                    case 2:
                      this.userAccount = _context21.sent;

                      if (this.userAccount != undefined && this.userAccount && this.userAccount.length) {
                        this.toaster.info('Already wallet Connected');
                        this.router.navigate(['/Mywallet/1']);
                      } else {
                        this.apiWalletService.getBehaviorView().subscribe(function (data) {
                          if (data && data != undefined) {
                            if (data['connected']) {
                              _this18.userAccount = data['walletAddress'];

                              _this18.router.navigate(['/Mywallet/2']);
                            } else {
                              $('#wallet_provider').modal({
                                backdrop: 'static',
                                keyboard: false,
                                show: true
                              });
                            }
                          } else {
                            $('#wallet_provider').modal({
                              backdrop: 'static',
                              keyboard: false,
                              show: true
                            });
                          }
                        });
                      }

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__["ApiWalletConnectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 57,
        vars: 0,
        consts: [[1, "spc_token", "pdgn-tp-cmn"], [1, "container"], [1, "row", "align-items-center", "inner_spc"], [1, "col-md-6"], [1, "left_spc_info"], [1, "text-center"], ["href", "javascript:void(0);", 1, "join_space", 3, "click"], [1, "col-md-6", "text-md-right"], [1, "right_spc_info"], ["src", "../../assets/images/spc_token.png", 1, "img-fluid"], [1, "img_bottom"], ["src", "../../assets/images/bottom_blue.png", 1, "img-fluid"], [1, "how_it_work"], [1, "common-title", "text-center"], [1, "row", "pdng-tp-90"], [1, "col-md-7"], [1, "conect_walet"], ["src", "../../assets/images/icon_wallet.png"], [1, "col-md-1"], [1, "col-md-4"], [1, "need_help"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "What is SPC token?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() {
              return ctx.checkConnectedWallet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Join Spacechain");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "How it works");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "01.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Connect Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "02.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Send SPC to Vault");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "03.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Upgrade SPC v1 tokens");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Need more info?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Read the Frequently Asked Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_55_listener() {
              return ctx.checkConnectedWallet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Join Spacechain");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__["ApiWalletConnectService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        main: 'Ethereum Main',
        rops: 'Ropsten',
        rinkeby: 'Rinkeby',
        Goerli: 'Goerli',
        Kovan: 'Kovan',
        divideValue: 1000000000000000000,
        ABI1: [{
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [{
            "name": "",
            "type": "string"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }, {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [{
            "name": "",
            "type": "uint256"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }, {
          "constant": true,
          "inputs": [],
          "name": "INITIAL_SUPPLY",
          "outputs": [{
            "name": "",
            "type": "uint256"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }, {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [{
            "name": "",
            "type": "uint8"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }, {
          "constant": false,
          "inputs": [{
            "name": "_value",
            "type": "uint256"
          }],
          "name": "burn",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "constant": true,
          "inputs": [{
            "name": "_owner",
            "type": "address"
          }],
          "name": "balanceOf",
          "outputs": [{
            "name": "",
            "type": "uint256"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }, {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [{
            "name": "",
            "type": "string"
          }],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }, {
          "constant": false,
          "inputs": [{
            "name": "_to",
            "type": "address"
          }, {
            "name": "_value",
            "type": "uint256"
          }],
          "name": "transfer",
          "outputs": [{
            "name": "",
            "type": "bool"
          }],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        }, {
          "anonymous": false,
          "inputs": [{
            "indexed": true,
            "name": "burner",
            "type": "address"
          }, {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }],
          "name": "Burn",
          "type": "event"
        }, {
          "anonymous": false,
          "inputs": [{
            "indexed": true,
            "name": "from",
            "type": "address"
          }, {
            "indexed": true,
            "name": "to",
            "type": "address"
          }, {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }],
          "name": "Transfer",
          "type": "event"
        }],
        ABI2: [{
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        }, {
          "anonymous": false,
          "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }, {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }],
          "name": "Approval",
          "type": "event"
        }, {
          "anonymous": false,
          "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }],
          "name": "Transfer",
          "type": "event"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }, {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }],
          "name": "allowance",
          "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }],
          "stateMutability": "view",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }],
          "name": "approve",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
          }],
          "name": "balanceOf",
          "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }],
          "stateMutability": "view",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }],
          "name": "burn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
          }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }],
          "name": "burnFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [],
          "name": "createUpgrader",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [],
          "name": "decimals",
          "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }],
          "stateMutability": "view",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }, {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }],
          "name": "decreaseAllowance",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }, {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }],
          "name": "increaseAllowance",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [],
          "name": "migrateV1tokens",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [],
          "name": "name",
          "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
          }],
          "stateMutability": "view",
          "type": "function"
        }, {
          "inputs": [],
          "name": "symbol",
          "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
          }],
          "stateMutability": "view",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
          }],
          "name": "tokenUpgrader",
          "outputs": [{
            "internalType": "contract TokenUpgrader",
            "name": "",
            "type": "address"
          }],
          "stateMutability": "view",
          "type": "function"
        }, {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }],
          "stateMutability": "view",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }],
          "name": "transfer",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        }, {
          "inputs": [{
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }, {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }],
          "name": "transferFrom",
          "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }],
          "stateMutability": "nonpayable",
          "type": "function"
        }],
        contractAddress1: '0x9e5687B0E65a52A53C02fE101e232Ed43A25f391',
        contractAddress2: '0xaC1A1565E11d4DBB70C4Ec7049823d9a97683561'
      };
      /***/
    },

    /***/
    "BGy5":
    /*!**********************************!*\
      !*** ./src/app/helpers/utils.ts ***!
      \**********************************/

    /*! exports provided: getChainData, sanitizeHex */

    /***/
    function BGy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getChainData", function () {
        return getChainData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sanitizeHex", function () {
        return sanitizeHex;
      });
      /* harmony import */


      var _chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chains */
      "UH4e");

      function getChainData(chainId) {
        var chainData = _chains__WEBPACK_IMPORTED_MODULE_0__["SUPPORTED_CHAINS"].filter(function (chain) {
          return chain.chain_id === chainId;
        })[0];

        if (!chainData) {
          throw new Error("ChainId missing or not supported");
        }

        var API_KEY = "ANGULAR_APP_INFURA_PROJECT_ID";

        if (chainData.rpc_url.includes("infura.io") && chainData.rpc_url.includes("%API_KEY%") && API_KEY) {
          var rpcUrl = chainData.rpc_url.replace("%API_KEY%", API_KEY);
          return Object.assign(Object.assign({}, chainData), {
            rpc_url: rpcUrl
          });
        }

        return chainData;
      }

      function sanitizeHex(hex) {
        hex = hex.substring(0, 2) === "0x" ? hex.substring(2) : hex;

        if (hex === "") {
          return "";
        }

        hex = hex.length % 2 !== 0 ? "0" + hex : hex;
        return "0x" + hex;
      }
      /***/

    },

    /***/
    "IDLs":
    /*!**************************************!*\
      !*** ./src/app/helpers/bignumber.ts ***!
      \**************************************/

    /*! exports provided: convertStringToHex, convertAmountToRawNumber */

    /***/
    function IDLs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertStringToHex", function () {
        return convertStringToHex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertAmountToRawNumber", function () {
        return convertAmountToRawNumber;
      });
      /* harmony import */


      var _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../assets/bignumber.js */
      "ci/b");
      /* harmony import */


      var _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

      function convertStringToHex(value) {
        return new _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a("".concat(value)).toString(16);
      }

      function convertAmountToRawNumber(value) {
        var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
        return new _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a("".concat(value)).times(new _assets_bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a("10").pow(decimals)).toString();
      }
      /***/

    },

    /***/
    "OPNc":
    /*!****************************************************!*\
      !*** ./src/app/layouts/header/header.component.ts ***!
      \****************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function OPNc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api.service */
      "yTNM");
      /* harmony import */


      var src_app_api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api-wallet-connect.service */
      "x/wV");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_h3_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.networkName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.walletAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 3, ctx_r0.walletAddress, -4));
        }
      }

      function HeaderComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Connect Wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, _route, apiService, apiWalletService, toaster) {
          _classCallCheck(this, HeaderComponent);

          // this.id = this._route.snapshot.params['id'];
          // if (this.id && this.id != undefined) {
          //   let idArray = ['1', '2'];
          this.router = router;
          this._route = _route;
          this.apiService = apiService;
          this.apiWalletService = apiWalletService;
          this.toaster = toaster;
          this.login = false;
          this.networkName = '';
          this.walletAddress = '';
          this.wallet = ''; //   if (!idArray.includes(this.id)) {
          //     this.router.navigate(['/']);
          //   } else {
          //     if (this.id == 1) {
          //       this.wallet = 'Metamask';

          this.getConnection(); // }
          // else {
          //   this.wallet = 'WalletConnect';
          // }
          // }
          // }
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            }));
          }
        }, {
          key: "getConnection",
          value: function getConnection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _this19 = this;

              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.apiService["export"]();

                    case 2:
                      this.userAccount = _context23.sent;

                      if (this.userAccount != undefined && this.userAccount && this.userAccount.length) {
                        this.login = true;
                        this.getNetworkName();
                        this.getSelectedAddress();
                      } else {
                        this.apiWalletService.getBehaviorView().subscribe(function (data) {
                          if (data && data != undefined) {
                            if (data['connected'] && data['connected'] == true) {
                              _this19.login = true;
                              _this19.networkName = data['networkName'];
                              _this19.walletAddress = data['walletAddress'];
                            } else {
                              $('#wallet_provider').modal('hide');
                              _this19.login = false;
                            }
                          } else {
                            _this19.login = false;
                          }
                        });
                      }

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "getNetworkName",
          value: function getNetworkName() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.apiService.getNetworkName();

                    case 2:
                      this.networkName = _context24.sent;

                    case 3:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "getSelectedAddress",
          value: function getSelectedAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.apiService.getSelectedAddress();

                    case 2:
                      this.walletAddress = _context25.sent;

                    case 3:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "connectToMetaMask",
          value: function connectToMetaMask() {
            var _this20 = this;

            this.apiService.connect().then(function (data) {
              _this20.login = true;

              _this20.getNetworkName();

              _this20.getSelectedAddress();

              _this20.toaster.success('User Connected Successfully');

              _this20.router.navigate(["/Mywallet/1"]);
            })["catch"](function (er) {
              if (er && er.code) {
                _this20.toaster.error(er.message);
              }
            });
          }
        }, {
          key: "connectToWalletConnect",
          value: function connectToWalletConnect() {
            var _this21 = this;

            this.apiWalletService.walletConnectInit();
            this.apiWalletService.getOnConnectBehaviorView().subscribe(function (data) {
              if (data && data != undefined) {
                if (data['connected']) {
                  $('#wallet_provider').modal('hide');

                  _this21.router.navigate(['/Mywallet/2']);
                } else {
                  $('#wallet_provider').modal('hide');
                }
              }
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_4__["ApiWalletConnectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 38,
        vars: 2,
        consts: [["id", "header", 1, "header"], [1, "container"], ["id", "nav", 1, "navbar"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../../../assets/images/spacelogo.png", 1, "logo"], [1, "nv_light"], [1, "text-center"], ["class", "text-white mb-0 mr-2 d-flex align-items-center", "style", "padding-right: 15px;font-size: 21px;", 4, "ngIf"], ["href", "javascript:void(0);", "class", "connect_btn", "data-toggle", "modal", "data-target", "#wallet_provider", 4, "ngIf"], ["id", "wallet_provider", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade", "common_modal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "justify-content-center", "align-items-center"], ["id", "exampleModalCenterTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "wallet_prov"], [1, "metamark_main"], ["src", "../../assets/images/metamark.png"], ["data-dismiss", "modal", 3, "click"], [1, "wallet_connect_btn"], ["src", "../../assets/images/wallet_collect.png"], [3, "click"], [1, "text-white", "mb-0", "mr-2", "d-flex", "align-items-center", 2, "padding-right", "15px", "font-size", "21px"], [1, "walletAddress", "d-flex"], [1, "ellips"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#wallet_provider", 1, "connect_btn"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_h3_7_Template, 9, 6, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Select a wallet provider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Metamask");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener() {
              return ctx.connectToMetaMask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Wallet connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_35_listener() {
              return ctx.connectToWalletConnect();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.login);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.login);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]],
        styles: [".walletAddress[_ngcontent-%COMP%]{\n    font-size: 14px;\n}\n.walletAddress[_ngcontent-%COMP%]   .ellips[_ngcontent-%COMP%]{\n    display: block;\n    width: 59px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    box-shadow: 0 0 black;\n    margin-right: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhbGxldEFkZHJlc3N7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLndhbGxldEFkZHJlc3MgLmVsbGlwc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTlweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCBibGFjaztcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_api_wallet_connect_service__WEBPACK_IMPORTED_MODULE_4__["ApiWalletConnectService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts/header/header.component */
      "OPNc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/footer/footer.component */
      "iIrt");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(document) {
          _classCallCheck(this, AppComponent);

          this.document = document;
          this.title = 'spacechain';
        }

        _createClass(AppComponent, [{
          key: "onWindowScroll",
          value: function onWindowScroll() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              document.getElementById('header').classList.add('fixed-header');
            } else {
              document.getElementById('header').classList.remove('fixed-header');
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 4,
        vars: 0,
        consts: [[1, "container-fluid", 3, "scroll"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_Template_div_scroll_1_listener() {
              return ctx.onWindowScroll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
          }
        },
        directives: [_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
          }]
        });
      })();
      /***/

    },

    /***/
    "UH4e":
    /*!***********************************!*\
      !*** ./src/app/helpers/chains.ts ***!
      \***********************************/

    /*! exports provided: SUPPORTED_CHAINS */

    /***/
    function UH4e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SUPPORTED_CHAINS", function () {
        return SUPPORTED_CHAINS;
      });

      var SUPPORTED_CHAINS = [{
        name: "Mainnet",
        short_name: "eth",
        chain: "ETH",
        network: "mainnet",
        chain_id: 1,
        network_id: 1,
        rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ether",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "Ropsten",
        short_name: "rop",
        chain: "ETH",
        network: "ropsten",
        chain_id: 3,
        network_id: 3,
        rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ether",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "Ethereum Rinkeby",
        short_name: "rin",
        chain: "ETH",
        network: "rinkeby",
        chain_id: 4,
        network_id: 4,
        rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ether",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "Ethereum Görli",
        short_name: "gor",
        chain: "ETH",
        network: "goerli",
        chain_id: 5,
        network_id: 5,
        rpc_url: "https://goerli.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ether",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "RSK Mainnet",
        short_name: "rsk",
        chain: "RSK",
        network: "mainnet",
        chain_id: 30,
        network_id: 30,
        rpc_url: "https://public-node.rsk.co",
        native_currency: {
          symbol: "RSK",
          name: "RSK",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "Ethereum Kovan",
        short_name: "kov",
        chain: "ETH",
        network: "kovan",
        chain_id: 42,
        network_id: 42,
        rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ether",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "Ethereum Classic Mainnet",
        short_name: "etc",
        chain: "ETC",
        network: "mainnet",
        chain_id: 61,
        network_id: 1,
        rpc_url: "https://ethereumclassic.network",
        native_currency: {
          symbol: "ETH",
          name: "Ether Classic",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "POA Network Sokol",
        short_name: "poa",
        chain: "POA",
        network: "sokol",
        chain_id: 77,
        network_id: 77,
        rpc_url: "https://sokol.poa.network",
        native_currency: {
          symbol: "POA",
          name: "POA",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "POA Network Core",
        short_name: "skl",
        chain: "POA",
        network: "core",
        chain_id: 99,
        network_id: 99,
        rpc_url: "https://core.poa.network",
        native_currency: {
          symbol: "POA",
          name: "POA",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "xDAI Chain",
        short_name: "xdai",
        chain: "POA",
        network: "dai",
        chain_id: 100,
        network_id: 100,
        rpc_url: "https://dai.poa.network",
        native_currency: {
          symbol: "xDAI",
          name: "xDAI",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }, {
        name: "Callisto Mainnet",
        short_name: "clo",
        chain: "callisto",
        network: "mainnet",
        chain_id: 820,
        network_id: 1,
        rpc_url: "https://clo-geth.0xinfra.com/",
        native_currency: {
          symbol: "CLO",
          name: "CLO",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }];
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layouts/header/header.component */
      "OPNc");
      /* harmony import */


      var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layouts/footer/footer.component */
      "iIrt");
      /* harmony import */


      var _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./my-wallet/my-wallet.component */
      "2XdG");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
          enableHtml: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_7__["MyWalletComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_7__["MyWalletComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
              timeOut: 3000,
              positionClass: 'toast-top-right',
              preventDuplicates: true,
              enableHtml: true
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ci/b":
    /*!**********************************************!*\
      !*** ./src/assets/bignumber.js/bignumber.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function ciB(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_RESULT__;

      ;

      (function (globalObject) {
        'use strict';
        /*
         *      bignumber.js v9.0.1
         *      A JavaScript library for arbitrary-precision arithmetic.
         *      https://github.com/MikeMcl/bignumber.js
         *      Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
         *      MIT Licensed.
         *
         *      BigNumber.prototype methods     |  BigNumber methods
         *                                      |
         *      absoluteValue            abs    |  clone
         *      comparedTo                      |  config               set
         *      decimalPlaces            dp     |      DECIMAL_PLACES
         *      dividedBy                div    |      ROUNDING_MODE
         *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
         *      exponentiatedBy          pow    |      RANGE
         *      integerValue                    |      CRYPTO
         *      isEqualTo                eq     |      MODULO_MODE
         *      isFinite                        |      POW_PRECISION
         *      isGreaterThan            gt     |      FORMAT
         *      isGreaterThanOrEqualTo   gte    |      ALPHABET
         *      isInteger                       |  isBigNumber
         *      isLessThan               lt     |  maximum              max
         *      isLessThanOrEqualTo      lte    |  minimum              min
         *      isNaN                           |  random
         *      isNegative                      |  sum
         *      isPositive                      |
         *      isZero                          |
         *      minus                           |
         *      modulo                   mod    |
         *      multipliedBy             times  |
         *      negated                         |
         *      plus                            |
         *      precision                sd     |
         *      shiftedBy                       |
         *      squareRoot               sqrt   |
         *      toExponential                   |
         *      toFixed                         |
         *      toFormat                        |
         *      toFraction                      |
         *      toJSON                          |
         *      toNumber                        |
         *      toPrecision                     |
         *      toString                        |
         *      valueOf                         |
         *
         */

        var BigNumber,
            isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            mathceil = Math.ceil,
            mathfloor = Math.floor,
            bignumberError = '[BigNumber Error] ',
            tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',
            BASE = 1e14,
            LOG_BASE = 14,
            MAX_SAFE_INTEGER = 0x1fffffffffffff,
            // 2^53 - 1
        // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
        POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            SQRT_BASE = 1e7,
            // EDITABLE
        // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
        // the arguments to toExponential, toFixed, toFormat, and toPrecision.
        MAX = 1E9; // 0 to MAX_INT32

        /*
         * Create and return a BigNumber constructor.
         */

        function clone(configObject) {
          var div,
              convertBase,
              parseNumeric,
              P = BigNumber.prototype = {
            constructor: BigNumber,
            toString: null,
            valueOf: null
          },
              ONE = new BigNumber(1),
              //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
          // The default values below must be integers within the inclusive ranges stated.
          // The values can also be changed at run-time using BigNumber.set.
          // The maximum number of decimal places for operations involving division.
          DECIMAL_PLACES = 20,
              // 0 to MAX
          // The rounding mode used when rounding to the above decimal places, and when using
          // toExponential, toFixed, toFormat and toPrecision, and round (default value).
          // UP         0 Away from zero.
          // DOWN       1 Towards zero.
          // CEIL       2 Towards +Infinity.
          // FLOOR      3 Towards -Infinity.
          // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
          // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
          // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
          // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
          // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
          ROUNDING_MODE = 4,
              // 0 to 8
          // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
          // The exponent value at and beneath which toString returns exponential notation.
          // Number type: -7
          TO_EXP_NEG = -7,
              // 0 to -MAX
          // The exponent value at and above which toString returns exponential notation.
          // Number type: 21
          TO_EXP_POS = 21,
              // 0 to MAX
          // RANGE : [MIN_EXP, MAX_EXP]
          // The minimum exponent value, beneath which underflow to zero occurs.
          // Number type: -324  (5e-324)
          MIN_EXP = -1e7,
              // -1 to -MAX
          // The maximum exponent value, above which overflow to Infinity occurs.
          // Number type:  308  (1.7976931348623157e+308)
          // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
          MAX_EXP = 1e7,
              // 1 to MAX
          // Whether to use cryptographically-secure random number generation, if available.
          CRYPTO = false,
              // true or false
          // The modulo mode used when calculating the modulus: a mod n.
          // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
          // The remainder (r) is calculated as: r = a - n * q.
          //
          // UP        0 The remainder is positive if the dividend is negative, else is negative.
          // DOWN      1 The remainder has the same sign as the dividend.
          //             This modulo mode is commonly known as 'truncated division' and is
          //             equivalent to (a % n) in JavaScript.
          // FLOOR     3 The remainder has the same sign as the divisor (Python %).
          // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
          // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
          //             The remainder is always positive.
          //
          // The truncated division, floored division, Euclidian division and IEEE 754 remainder
          // modes are commonly used for the modulus operation.
          // Although the other rounding modes can also be used, they may not give useful results.
          MODULO_MODE = 1,
              // 0 to 9
          // The maximum number of significant digits of the result of the exponentiatedBy operation.
          // If POW_PRECISION is 0, there will be unlimited significant digits.
          POW_PRECISION = 0,
              // 0 to MAX
          // The format specification used by the BigNumber.prototype.toFormat method.
          FORMAT = {
            prefix: '',
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ',',
            decimalSeparator: '.',
            fractionGroupSize: 0,
            fractionGroupSeparator: '\xA0',
            // non-breaking space
            suffix: ''
          },
              // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
          // '-', '.', whitespace, or repeated character.
          // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
          ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz'; //------------------------------------------------------------------------------------------
          // CONSTRUCTOR

          /*
           * The BigNumber constructor and exported function.
           * Create and return a new instance of a BigNumber object.
           *
           * v {number|string|BigNumber} A numeric value.
           * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
           */

          function BigNumber(v, b) {
            var alphabet,
                c,
                caseChanged,
                e,
                i,
                isNum,
                len,
                str,
                x = this; // Enable constructor call without `new`.

            if (!(x instanceof BigNumber)) return new BigNumber(v, b);

            if (b == null) {
              if (v && v._isBigNumber === true) {
                x.s = v.s;

                if (!v.c || v.e > MAX_EXP) {
                  x.c = x.e = null;
                } else if (v.e < MIN_EXP) {
                  x.c = [x.e = 0];
                } else {
                  x.e = v.e;
                  x.c = v.c.slice();
                }

                return;
              }

              if ((isNum = typeof v == 'number') && v * 0 == 0) {
                // Use `1 / n` to handle minus zero also.
                x.s = 1 / v < 0 ? (v = -v, -1) : 1; // Fast path for integers, where n < 2147483648 (2**31).

                if (v === ~~v) {
                  for (e = 0, i = v; i >= 10; i /= 10, e++) {
                    ;
                  }

                  if (e > MAX_EXP) {
                    x.c = x.e = null;
                  } else {
                    x.e = e;
                    x.c = [v];
                  }

                  return;
                }

                str = String(v);
              } else {
                if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
              } // Decimal point?


              if ((e = str.indexOf('.')) > -1) str = str.replace('.', ''); // Exponential form?

              if ((i = str.search(/e/i)) > 0) {
                // Determine exponent.
                if (e < 0) e = i;
                e += +str.slice(i + 1);
                str = str.substring(0, i);
              } else if (e < 0) {
                // Integer.
                e = str.length;
              }
            } else {
              // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
              intCheck(b, 2, ALPHABET.length, 'Base'); // Allow exponential notation to be used with base 10 argument, while
              // also rounding to DECIMAL_PLACES as with other bases.

              if (b == 10) {
                x = new BigNumber(v);
                return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
              }

              str = String(v);

              if (isNum = typeof v == 'number') {
                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1; // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'

                if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
                  throw Error(tooManyDigits + v);
                }
              } else {
                x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
              }

              alphabet = ALPHABET.slice(0, b);
              e = i = 0; // Check that str is a valid base b number.
              // Don't use RegExp, so alphabet can contain special characters.

              for (len = str.length; i < len; i++) {
                if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                  if (c == '.') {
                    // If '.' is not the first character and it has not be found before.
                    if (i > e) {
                      e = len;
                      continue;
                    }
                  } else if (!caseChanged) {
                    // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                    if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                      caseChanged = true;
                      i = -1;
                      e = 0;
                      continue;
                    }
                  }

                  return parseNumeric(x, String(v), isNum, b);
                }
              } // Prevent later check for length on converted number.


              isNum = false;
              str = convertBase(str, b, 10, x.s); // Decimal point?

              if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');else e = str.length;
            } // Determine leading zeros.


            for (i = 0; str.charCodeAt(i) === 48; i++) {
              ;
            } // Determine trailing zeros.


            for (len = str.length; str.charCodeAt(--len) === 48;) {
              ;
            }

            if (str = str.slice(i, ++len)) {
              len -= i; // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'

              if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                throw Error(tooManyDigits + x.s * v);
              } // Overflow?


              if ((e = e - i - 1) > MAX_EXP) {
                // Infinity.
                x.c = x.e = null; // Underflow?
              } else if (e < MIN_EXP) {
                // Zero.
                x.c = [x.e = 0];
              } else {
                x.e = e;
                x.c = []; // Transform base
                // e is the base 10 exponent.
                // i is where to slice str to get the first element of the coefficient array.

                i = (e + 1) % LOG_BASE;
                if (e < 0) i += LOG_BASE; // i < 1

                if (i < len) {
                  if (i) x.c.push(+str.slice(0, i));

                  for (len -= LOG_BASE; i < len;) {
                    x.c.push(+str.slice(i, i += LOG_BASE));
                  }

                  i = LOG_BASE - (str = str.slice(i)).length;
                } else {
                  i -= len;
                }

                for (; i--; str += '0') {
                  ;
                }

                x.c.push(+str);
              }
            } else {
              // Zero.
              x.c = [x.e = 0];
            }
          } // CONSTRUCTOR PROPERTIES


          BigNumber.clone = clone;
          BigNumber.ROUND_UP = 0;
          BigNumber.ROUND_DOWN = 1;
          BigNumber.ROUND_CEIL = 2;
          BigNumber.ROUND_FLOOR = 3;
          BigNumber.ROUND_HALF_UP = 4;
          BigNumber.ROUND_HALF_DOWN = 5;
          BigNumber.ROUND_HALF_EVEN = 6;
          BigNumber.ROUND_HALF_CEIL = 7;
          BigNumber.ROUND_HALF_FLOOR = 8;
          BigNumber.EUCLID = 9;
          /*
           * Configure infrequently-changing library-wide settings.
           *
           * Accept an object with the following optional properties (if the value of a property is
           * a number, it must be an integer within the inclusive range stated):
           *
           *   DECIMAL_PLACES   {number}           0 to MAX
           *   ROUNDING_MODE    {number}           0 to 8
           *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
           *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
           *   CRYPTO           {boolean}          true or false
           *   MODULO_MODE      {number}           0 to 9
           *   POW_PRECISION       {number}           0 to MAX
           *   ALPHABET         {string}           A string of two or more unique characters which does
           *                                       not contain '.'.
           *   FORMAT           {object}           An object with some of the following properties:
           *     prefix                 {string}
           *     groupSize              {number}
           *     secondaryGroupSize     {number}
           *     groupSeparator         {string}
           *     decimalSeparator       {string}
           *     fractionGroupSize      {number}
           *     fractionGroupSeparator {string}
           *     suffix                 {string}
           *
           * (The values assigned to the above FORMAT object properties are not checked for validity.)
           *
           * E.g.
           * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
           *
           * Ignore properties/parameters set to null or undefined, except for ALPHABET.
           *
           * Return an object with the properties current values.
           */

          BigNumber.config = BigNumber.set = function (obj) {
            var p, v;

            if (obj != null) {
              if (typeof obj == 'object') {
                // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
                  v = obj[p];
                  intCheck(v, 0, MAX, p);
                  DECIMAL_PLACES = v;
                } // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'


                if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
                  v = obj[p];
                  intCheck(v, 0, 8, p);
                  ROUNDING_MODE = v;
                } // EXPONENTIAL_AT {number|number[]}
                // Integer, -MAX to MAX inclusive or
                // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'


                if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
                  v = obj[p];

                  if (v && v.pop) {
                    intCheck(v[0], -MAX, 0, p);
                    intCheck(v[1], 0, MAX, p);
                    TO_EXP_NEG = v[0];
                    TO_EXP_POS = v[1];
                  } else {
                    intCheck(v, -MAX, MAX, p);
                    TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                  }
                } // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'


                if (obj.hasOwnProperty(p = 'RANGE')) {
                  v = obj[p];

                  if (v && v.pop) {
                    intCheck(v[0], -MAX, -1, p);
                    intCheck(v[1], 1, MAX, p);
                    MIN_EXP = v[0];
                    MAX_EXP = v[1];
                  } else {
                    intCheck(v, -MAX, MAX, p);

                    if (v) {
                      MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                    } else {
                      throw Error(bignumberError + p + ' cannot be zero: ' + v);
                    }
                  }
                } // CRYPTO {boolean} true or false.
                // '[BigNumber Error] CRYPTO not true or false: {v}'
                // '[BigNumber Error] crypto unavailable'


                if (obj.hasOwnProperty(p = 'CRYPTO')) {
                  v = obj[p];

                  if (v === !!v) {
                    if (v) {
                      if (typeof crypto != 'undefined' && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                        CRYPTO = v;
                      } else {
                        CRYPTO = !v;
                        throw Error(bignumberError + 'crypto unavailable');
                      }
                    } else {
                      CRYPTO = v;
                    }
                  } else {
                    throw Error(bignumberError + p + ' not true or false: ' + v);
                  }
                } // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'


                if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
                  v = obj[p];
                  intCheck(v, 0, 9, p);
                  MODULO_MODE = v;
                } // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'


                if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
                  v = obj[p];
                  intCheck(v, 0, MAX, p);
                  POW_PRECISION = v;
                } // FORMAT {object}
                // '[BigNumber Error] FORMAT not an object: {v}'


                if (obj.hasOwnProperty(p = 'FORMAT')) {
                  v = obj[p];
                  if (typeof v == 'object') FORMAT = v;else throw Error(bignumberError + p + ' not an object: ' + v);
                } // ALPHABET {string}
                // '[BigNumber Error] ALPHABET invalid: {v}'


                if (obj.hasOwnProperty(p = 'ALPHABET')) {
                  v = obj[p]; // Disallow if less than two characters,
                  // or if it contains '+', '-', '.', whitespace, or a repeated character.

                  if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                    ALPHABET = v;
                  } else {
                    throw Error(bignumberError + p + ' invalid: ' + v);
                  }
                }
              } else {
                // '[BigNumber Error] Object expected: {v}'
                throw Error(bignumberError + 'Object expected: ' + obj);
              }
            }

            return {
              DECIMAL_PLACES: DECIMAL_PLACES,
              ROUNDING_MODE: ROUNDING_MODE,
              EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
              RANGE: [MIN_EXP, MAX_EXP],
              CRYPTO: CRYPTO,
              MODULO_MODE: MODULO_MODE,
              POW_PRECISION: POW_PRECISION,
              FORMAT: FORMAT,
              ALPHABET: ALPHABET
            };
          };
          /*
           * Return true if v is a BigNumber instance, otherwise return false.
           *
           * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
           *
           * v {any}
           *
           * '[BigNumber Error] Invalid BigNumber: {v}'
           */


          BigNumber.isBigNumber = function (v) {
            if (!v || v._isBigNumber !== true) return false;
            if (!BigNumber.DEBUG) return true;
            var i,
                n,
                c = v.c,
                e = v.e,
                s = v.s;

            out: if ({}.toString.call(c) == '[object Array]') {
              if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                // If the first element is zero, the BigNumber value must be zero.
                if (c[0] === 0) {
                  if (e === 0 && c.length === 1) return true;
                  break out;
                } // Calculate number of digits that c[0] should have, based on the exponent.


                i = (e + 1) % LOG_BASE;
                if (i < 1) i += LOG_BASE; // Calculate number of digits of c[0].
                //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {

                if (String(c[0]).length == i) {
                  for (i = 0; i < c.length; i++) {
                    n = c[i];
                    if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                  } // Last element cannot be zero, unless it is the only element.


                  if (n !== 0) return true;
                }
              } // Infinity/NaN

            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
              return true;
            }

            throw Error(bignumberError + 'Invalid BigNumber: ' + v);
          };
          /*
           * Return a new BigNumber whose value is the maximum of the arguments.
           *
           * arguments {number|string|BigNumber}
           */


          BigNumber.maximum = BigNumber.max = function () {
            return maxOrMin(arguments, P.lt);
          };
          /*
           * Return a new BigNumber whose value is the minimum of the arguments.
           *
           * arguments {number|string|BigNumber}
           */


          BigNumber.minimum = BigNumber.min = function () {
            return maxOrMin(arguments, P.gt);
          };
          /*
           * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
           * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
           * zeros are produced).
           *
           * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
           * '[BigNumber Error] crypto unavailable'
           */


          BigNumber.random = function () {
            var pow2_53 = 0x20000000000000; // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.

            var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function () {
              return mathfloor(Math.random() * pow2_53);
            } : function () {
              return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
            };
            return function (dp) {
              var a,
                  b,
                  e,
                  k,
                  v,
                  i = 0,
                  c = [],
                  rand = new BigNumber(ONE);
              if (dp == null) dp = DECIMAL_PLACES;else intCheck(dp, 0, MAX);
              k = mathceil(dp / LOG_BASE);

              if (CRYPTO) {
                // Browsers supporting crypto.getRandomValues.
                if (crypto.getRandomValues) {
                  a = crypto.getRandomValues(new Uint32Array(k *= 2));

                  for (; i < k;) {
                    // 53 bits:
                    // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                    // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                    // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                    //                                     11111 11111111 11111111
                    // 0x20000 is 2^21.
                    v = a[i] * 0x20000 + (a[i + 1] >>> 11); // Rejection sampling:
                    // 0 <= v < 9007199254740992
                    // Probability that v >= 9e15, is
                    // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251

                    if (v >= 9e15) {
                      b = crypto.getRandomValues(new Uint32Array(2));
                      a[i] = b[0];
                      a[i + 1] = b[1];
                    } else {
                      // 0 <= v <= 8999999999999999
                      // 0 <= (v % 1e14) <= 99999999999999
                      c.push(v % 1e14);
                      i += 2;
                    }
                  }

                  i = k / 2; // Node.js supporting crypto.randomBytes.
                } else if (crypto.randomBytes) {
                  // buffer
                  a = crypto.randomBytes(k *= 7);

                  for (; i < k;) {
                    // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                    // 0x100000000 is 2^32, 0x1000000 is 2^24
                    // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                    // 0 <= v < 9007199254740992
                    v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

                    if (v >= 9e15) {
                      crypto.randomBytes(7).copy(a, i);
                    } else {
                      // 0 <= (v % 1e14) <= 99999999999999
                      c.push(v % 1e14);
                      i += 7;
                    }
                  }

                  i = k / 7;
                } else {
                  CRYPTO = false;
                  throw Error(bignumberError + 'crypto unavailable');
                }
              } // Use Math.random.


              if (!CRYPTO) {
                for (; i < k;) {
                  v = random53bitInt();
                  if (v < 9e15) c[i++] = v % 1e14;
                }
              }

              k = c[--i];
              dp %= LOG_BASE; // Convert trailing digits to zeros according to dp.

              if (k && dp) {
                v = POWS_TEN[LOG_BASE - dp];
                c[i] = mathfloor(k / v) * v;
              } // Remove trailing elements which are zero.


              for (; c[i] === 0; c.pop(), i--) {
                ;
              } // Zero?


              if (i < 0) {
                c = [e = 0];
              } else {
                // Remove leading elements which are zero and adjust exponent accordingly.
                for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE) {
                  ;
                } // Count the digits of the first element of c to determine leading zeros, and...


                for (i = 1, v = c[0]; v >= 10; v /= 10, i++) {
                  ;
                } // adjust the exponent accordingly.


                if (i < LOG_BASE) e -= LOG_BASE - i;
              }

              rand.e = e;
              rand.c = c;
              return rand;
            };
          }();
          /*
           * Return a BigNumber whose value is the sum of the arguments.
           *
           * arguments {number|string|BigNumber}
           */


          BigNumber.sum = function () {
            var i = 1,
                args = arguments,
                sum = new BigNumber(args[0]);

            for (; i < args.length;) {
              sum = sum.plus(args[i++]);
            }

            return sum;
          }; // PRIVATE FUNCTIONS
          // Called by BigNumber and BigNumber.prototype.toString.


          convertBase = function () {
            var decimal = '0123456789';
            /*
             * Convert string of baseIn to an array of numbers of baseOut.
             * Eg. toBaseOut('255', 10, 16) returns [15, 15].
             * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
             */

            function toBaseOut(str, baseIn, baseOut, alphabet) {
              var j,
                  arr = [0],
                  arrL,
                  i = 0,
                  len = str.length;

              for (; i < len;) {
                for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) {
                  ;
                }

                arr[0] += alphabet.indexOf(str.charAt(i++));

                for (j = 0; j < arr.length; j++) {
                  if (arr[j] > baseOut - 1) {
                    if (arr[j + 1] == null) arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                  }
                }
              }

              return arr.reverse();
            } // Convert a numeric string of baseIn to a numeric string of baseOut.
            // If the caller is toString, we are converting from base 10 to baseOut.
            // If the caller is BigNumber, we are converting from baseIn to base 10.


            return function (str, baseIn, baseOut, sign, callerIsToString) {
              var alphabet,
                  d,
                  e,
                  k,
                  r,
                  x,
                  xc,
                  y,
                  i = str.indexOf('.'),
                  dp = DECIMAL_PLACES,
                  rm = ROUNDING_MODE; // Non-integer.

              if (i >= 0) {
                k = POW_PRECISION; // Unlimited precision.

                POW_PRECISION = 0;
                str = str.replace('.', '');
                y = new BigNumber(baseIn);
                x = y.pow(str.length - i);
                POW_PRECISION = k; // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.

                y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'), 10, baseOut, decimal);
                y.e = y.c.length;
              } // Convert the number as integer.


              xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET)); // xc now represents str as an integer and converted to baseOut. e is the exponent.

              e = k = xc.length; // Remove trailing zeros.

              for (; xc[--k] == 0; xc.pop()) {
                ;
              } // Zero?


              if (!xc[0]) return alphabet.charAt(0); // Does str represent an integer? If so, no need for the division.

              if (i < 0) {
                --e;
              } else {
                x.c = xc;
                x.e = e; // The sign is needed for correct rounding.

                x.s = sign;
                x = div(x, y, dp, rm, baseOut);
                xc = x.c;
                r = x.r;
                e = x.e;
              } // xc now represents str converted to baseOut.
              // THe index of the rounding digit.


              d = e + dp + 1; // The rounding digit: the digit to the right of the digit that may be rounded up.

              i = xc[d]; // Look at the rounding digits and mode to determine whether to round up.

              k = baseOut / 2;
              r = r || d < 0 || xc[d + 1] != null;
              r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7)); // If the index of the rounding digit is not greater than zero, or xc represents
              // zero, then the result of the base conversion is zero or, if rounding up, a value
              // such as 0.00001.

              if (d < 1 || !xc[0]) {
                // 1^-dp or 0
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
              } else {
                // Truncate xc to the required number of decimal places.
                xc.length = d; // Round up?

                if (r) {
                  // Rounding up may mean the previous digit has to be rounded up and so on.
                  for (--baseOut; ++xc[--d] > baseOut;) {
                    xc[d] = 0;

                    if (!d) {
                      ++e;
                      xc = [1].concat(xc);
                    }
                  }
                } // Determine trailing zeros.


                for (k = xc.length; !xc[--k];) {
                  ;
                } // E.g. [4, 11, 15] becomes 4bf.


                for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++])) {
                  ;
                } // Add leading zeros, decimal point and trailing zeros as required.


                str = toFixedPoint(str, e, alphabet.charAt(0));
              } // The caller will add the sign.


              return str;
            };
          }(); // Perform division in the specified base. Called by div and convertBase.


          div = function () {
            // Assume non-zero x and k.
            function multiply(x, k, base) {
              var m,
                  temp,
                  xlo,
                  xhi,
                  carry = 0,
                  i = x.length,
                  klo = k % SQRT_BASE,
                  khi = k / SQRT_BASE | 0;

              for (x = x.slice(); i--;) {
                xlo = x[i] % SQRT_BASE;
                xhi = x[i] / SQRT_BASE | 0;
                m = khi * xlo + xhi * klo;
                temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                x[i] = temp % base;
              }

              if (carry) x = [carry].concat(x);
              return x;
            }

            function compare(a, b, aL, bL) {
              var i, cmp;

              if (aL != bL) {
                cmp = aL > bL ? 1 : -1;
              } else {
                for (i = cmp = 0; i < aL; i++) {
                  if (a[i] != b[i]) {
                    cmp = a[i] > b[i] ? 1 : -1;
                    break;
                  }
                }
              }

              return cmp;
            }

            function subtract(a, b, aL, base) {
              var i = 0; // Subtract b from a.

              for (; aL--;) {
                a[aL] -= i;
                i = a[aL] < b[aL] ? 1 : 0;
                a[aL] = i * base + a[aL] - b[aL];
              } // Remove leading zeros.


              for (; !a[0] && a.length > 1; a.splice(0, 1)) {
                ;
              }
            } // x: dividend, y: divisor.


            return function (x, y, dp, rm, base) {
              var cmp,
                  e,
                  i,
                  more,
                  n,
                  prod,
                  prodL,
                  q,
                  qc,
                  rem,
                  remL,
                  rem0,
                  xi,
                  xL,
                  yc0,
                  yL,
                  yz,
                  s = x.s == y.s ? 1 : -1,
                  xc = x.c,
                  yc = y.c; // Either NaN, Infinity or 0?

              if (!xc || !xc[0] || !yc || !yc[0]) {
                return new BigNumber( // Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
              }

              q = new BigNumber(s);
              qc = q.c = [];
              e = x.e - y.e;
              s = dp + e + 1;

              if (!base) {
                base = BASE;
                e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                s = s / LOG_BASE | 0;
              } // Result exponent may be one less then the current value of e.
              // The coefficients of the BigNumbers from convertBase may have trailing zeros.


              for (i = 0; yc[i] == (xc[i] || 0); i++) {
                ;
              }

              if (yc[i] > (xc[i] || 0)) e--;

              if (s < 0) {
                qc.push(1);
                more = true;
              } else {
                xL = xc.length;
                yL = yc.length;
                i = 0;
                s += 2; // Normalise xc and yc so highest order digit of yc is >= base / 2.

                n = mathfloor(base / (yc[0] + 1)); // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                // if (n > 1 || n++ == 1 && yc[0] < base / 2) {

                if (n > 1) {
                  yc = multiply(yc, n, base);
                  xc = multiply(xc, n, base);
                  yL = yc.length;
                  xL = xc.length;
                }

                xi = yL;
                rem = xc.slice(0, yL);
                remL = rem.length; // Add zeros to make remainder as long as divisor.

                for (; remL < yL; rem[remL++] = 0) {
                  ;
                }

                yz = yc.slice();
                yz = [0].concat(yz);
                yc0 = yc[0];
                if (yc[1] >= base / 2) yc0++; // Not necessary, but to prevent trial digit n > base, when using base 3.
                // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

                do {
                  n = 0; // Compare divisor and remainder.

                  cmp = compare(yc, rem, yL, remL); // If divisor < remainder.

                  if (cmp < 0) {
                    // Calculate trial digit, n.
                    rem0 = rem[0];
                    if (yL != remL) rem0 = rem0 * base + (rem[1] || 0); // n is how many times the divisor goes into the current remainder.

                    n = mathfloor(rem0 / yc0); //  Algorithm:
                    //  product = divisor multiplied by trial digit (n).
                    //  Compare product and remainder.
                    //  If product is greater than remainder:
                    //    Subtract divisor from product, decrement trial digit.
                    //  Subtract product from remainder.
                    //  If product was less than remainder at the last compare:
                    //    Compare new remainder and divisor.
                    //    If remainder is greater than divisor:
                    //      Subtract divisor from remainder, increment trial digit.

                    if (n > 1) {
                      // n may be > base only when base is 3.
                      if (n >= base) n = base - 1; // product = divisor * trial digit.

                      prod = multiply(yc, n, base);
                      prodL = prod.length;
                      remL = rem.length; // Compare product and remainder.
                      // If product > remainder then trial digit n too high.
                      // n is 1 too high about 5% of the time, and is not known to have
                      // ever been more than 1 too high.

                      while (compare(prod, rem, prodL, remL) == 1) {
                        n--; // Subtract divisor from product.

                        subtract(prod, yL < prodL ? yz : yc, prodL, base);
                        prodL = prod.length;
                        cmp = 1;
                      }
                    } else {
                      // n is 0 or 1, cmp is -1.
                      // If n is 0, there is no need to compare yc and rem again below,
                      // so change cmp to 1 to avoid it.
                      // If n is 1, leave cmp as -1, so yc and rem are compared again.
                      if (n == 0) {
                        // divisor < remainder, so n must be at least 1.
                        cmp = n = 1;
                      } // product = divisor


                      prod = yc.slice();
                      prodL = prod.length;
                    }

                    if (prodL < remL) prod = [0].concat(prod); // Subtract product from remainder.

                    subtract(rem, prod, remL, base);
                    remL = rem.length; // If product was < remainder.

                    if (cmp == -1) {
                      // Compare divisor and new remainder.
                      // If divisor < new remainder, subtract divisor from remainder.
                      // Trial digit n too low.
                      // n is 1 too low about 5% of the time, and very rarely 2 too low.
                      while (compare(yc, rem, yL, remL) < 1) {
                        n++; // Subtract divisor from remainder.

                        subtract(rem, yL < remL ? yz : yc, remL, base);
                        remL = rem.length;
                      }
                    }
                  } else if (cmp === 0) {
                    n++;
                    rem = [0];
                  } // else cmp === 1 and n will be 0
                  // Add the next digit, n, to the result array.


                  qc[i++] = n; // Update the remainder.

                  if (rem[0]) {
                    rem[remL++] = xc[xi] || 0;
                  } else {
                    rem = [xc[xi]];
                    remL = 1;
                  }
                } while ((xi++ < xL || rem[0] != null) && s--);

                more = rem[0] != null; // Leading zero?

                if (!qc[0]) qc.splice(0, 1);
              }

              if (base == BASE) {
                // To calculate q.e, first get the number of digits of qc[0].
                for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) {
                  ;
                }

                round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more); // Caller is convertBase.
              } else {
                q.e = e;
                q.r = +more;
              }

              return q;
            };
          }();
          /*
           * Return a string representing the value of BigNumber n in fixed-point or exponential
           * notation rounded to the specified decimal places or significant digits.
           *
           * n: a BigNumber.
           * i: the index of the last digit required (i.e. the digit that may be rounded up).
           * rm: the rounding mode.
           * id: 1 (toExponential) or 2 (toPrecision).
           */


          function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null) rm = ROUNDING_MODE;else intCheck(rm, 0, 8);
            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;

            if (i == null) {
              str = coeffToString(n.c);
              str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, '0');
            } else {
              n = round(new BigNumber(n), i, rm); // n.e may have changed if the value was rounded up.

              e = n.e;
              str = coeffToString(n.c);
              len = str.length; // toPrecision returns exponential notation if the number of significant digits
              // specified is less than the number of digits necessary to represent the integer
              // part of the value in fixed-point notation.
              // Exponential notation.

              if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                // Append zeros?
                for (; len < i; str += '0', len++) {
                  ;
                }

                str = toExponential(str, e); // Fixed-point notation.
              } else {
                i -= ne;
                str = toFixedPoint(str, e, '0'); // Append zeros?

                if (e + 1 > len) {
                  if (--i > 0) for (str += '.'; i--; str += '0') {
                    ;
                  }
                } else {
                  i += e - len;

                  if (i > 0) {
                    if (e + 1 == len) str += '.';

                    for (; i--; str += '0') {
                      ;
                    }
                  }
                }
              }
            }

            return n.s < 0 && c0 ? '-' + str : str;
          } // Handle BigNumber.max and BigNumber.min.


          function maxOrMin(args, method) {
            var n,
                i = 1,
                m = new BigNumber(args[0]);

            for (; i < args.length; i++) {
              n = new BigNumber(args[i]); // If any number is NaN, return NaN.

              if (!n.s) {
                m = n;
                break;
              } else if (method.call(m, n)) {
                m = n;
              }
            }

            return m;
          }
          /*
           * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
           * Called by minus, plus and times.
           */


          function normalise(n, c, e) {
            var i = 1,
                j = c.length; // Remove trailing zeros.

            for (; !c[--j]; c.pop()) {
              ;
            } // Calculate the base 10 exponent. First get the number of digits of c[0].


            for (j = c[0]; j >= 10; j /= 10, i++) {
              ;
            } // Overflow?


            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
              // Infinity.
              n.c = n.e = null; // Underflow?
            } else if (e < MIN_EXP) {
              // Zero.
              n.c = [n.e = 0];
            } else {
              n.e = e;
              n.c = c;
            }

            return n;
          } // Handle values that fail the validity test in BigNumber.


          parseNumeric = function () {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                dotAfter = /^([^.]+)\.$/,
                dotBefore = /^\.([^.]+)$/,
                isInfinityOrNaN = /^-?(Infinity|NaN)$/,
                whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function (x, str, isNum, b) {
              var base,
                  s = isNum ? str : str.replace(whitespaceOrPlus, ''); // No exception on ±Infinity or NaN.

              if (isInfinityOrNaN.test(s)) {
                x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
              } else {
                if (!isNum) {
                  // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                  s = s.replace(basePrefix, function (m, p1, p2) {
                    base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                    return !b || b == base ? p1 : m;
                  });

                  if (b) {
                    base = b; // E.g. '1.' to '1', '.1' to '0.1'

                    s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                  }

                  if (str != s) return new BigNumber(s, base);
                } // '[BigNumber Error] Not a number: {n}'
                // '[BigNumber Error] Not a base {b} number: {n}'


                if (BigNumber.DEBUG) {
                  throw Error(bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
                } // NaN


                x.s = null;
              }

              x.c = x.e = null;
            };
          }();
          /*
           * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
           * If r is truthy, it is known that there are more digits after the rounding digit.
           */


          function round(x, sd, rm, r) {
            var d,
                i,
                j,
                k,
                n,
                ni,
                rd,
                xc = x.c,
                pows10 = POWS_TEN; // if x is not Infinity or NaN...

            if (xc) {
              // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
              // n is a base 1e14 number, the value of the element of array x.c containing rd.
              // ni is the index of n within x.c.
              // d is the number of digits of n.
              // i is the index of rd within n including leading zeros.
              // j is the actual index of rd within n (if < 0, rd is a leading zero).
              out: {
                // Get the number of digits of the first element of xc.
                for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) {
                  ;
                }

                i = sd - d; // If the rounding digit is in the first element of xc...

                if (i < 0) {
                  i += LOG_BASE;
                  j = sd;
                  n = xc[ni = 0]; // Get the rounding digit at index j of n.

                  rd = n / pows10[d - j - 1] % 10 | 0;
                } else {
                  ni = mathceil((i + 1) / LOG_BASE);

                  if (ni >= xc.length) {
                    if (r) {
                      // Needed by sqrt.
                      for (; xc.length <= ni; xc.push(0)) {
                        ;
                      }

                      n = rd = 0;
                      d = 1;
                      i %= LOG_BASE;
                      j = i - LOG_BASE + 1;
                    } else {
                      break out;
                    }
                  } else {
                    n = k = xc[ni]; // Get the number of digits of n.

                    for (d = 1; k >= 10; k /= 10, d++) {
                      ;
                    } // Get the index of rd within n.


                    i %= LOG_BASE; // Get the index of rd within n, adjusted for leading zeros.
                    // The number of leading zeros of n is given by LOG_BASE - d.

                    j = i - LOG_BASE + d; // Get the rounding digit at index j of n.

                    rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                  }
                }

                r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
                (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));

                if (sd < 1 || !xc[0]) {
                  xc.length = 0;

                  if (r) {
                    // Convert sd to decimal places.
                    sd -= x.e + 1; // 1, 0.1, 0.01, 0.001, 0.0001 etc.

                    xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                    x.e = -sd || 0;
                  } else {
                    // Zero.
                    xc[0] = x.e = 0;
                  }

                  return x;
                } // Remove excess digits.


                if (i == 0) {
                  xc.length = ni;
                  k = 1;
                  ni--;
                } else {
                  xc.length = ni + 1;
                  k = pows10[LOG_BASE - i]; // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                  // j > 0 means i > number of leading zeros of n.

                  xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                } // Round up?


                if (r) {
                  for (;;) {
                    // If the digit to be rounded up is in the first element of xc...
                    if (ni == 0) {
                      // i will be the length of xc[0] before k is added.
                      for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) {
                        ;
                      }

                      j = xc[0] += k;

                      for (k = 1; j >= 10; j /= 10, k++) {
                        ;
                      } // if i != k the length has increased.


                      if (i != k) {
                        x.e++;
                        if (xc[0] == BASE) xc[0] = 1;
                      }

                      break;
                    } else {
                      xc[ni] += k;
                      if (xc[ni] != BASE) break;
                      xc[ni--] = 0;
                      k = 1;
                    }
                  }
                } // Remove trailing zeros.


                for (i = xc.length; xc[--i] === 0; xc.pop()) {
                  ;
                }
              } // Overflow? Infinity.


              if (x.e > MAX_EXP) {
                x.c = x.e = null; // Underflow? Zero.
              } else if (x.e < MIN_EXP) {
                x.c = [x.e = 0];
              }
            }

            return x;
          }

          function valueOf(n) {
            var str,
                e = n.e;
            if (e === null) return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, '0');
            return n.s < 0 ? '-' + str : str;
          } // PROTOTYPE/INSTANCE METHODS

          /*
           * Return a new BigNumber whose value is the absolute value of this BigNumber.
           */


          P.absoluteValue = P.abs = function () {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
          };
          /*
           * Return
           *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
           *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
           *   0 if they have the same value,
           *   or null if the value of either is NaN.
           */


          P.comparedTo = function (y, b) {
            return compare(this, new BigNumber(y, b));
          };
          /*
           * If dp is undefined or null or true or false, return the number of decimal places of the
           * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
           *
           * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
           * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
           * ROUNDING_MODE if rm is omitted.
           *
           * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
           * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
           */


          P.decimalPlaces = P.dp = function (dp, rm) {
            var c,
                n,
                v,
                x = this;

            if (dp != null) {
              intCheck(dp, 0, MAX);
              if (rm == null) rm = ROUNDING_MODE;else intCheck(rm, 0, 8);
              return round(new BigNumber(x), dp + x.e + 1, rm);
            }

            if (!(c = x.c)) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE; // Subtract the number of trailing zeros of the last number.

            if (v = c[v]) for (; v % 10 == 0; v /= 10, n--) {
              ;
            }
            if (n < 0) n = 0;
            return n;
          };
          /*
           *  n / 0 = I
           *  n / N = N
           *  n / I = 0
           *  0 / n = 0
           *  0 / 0 = N
           *  0 / N = N
           *  0 / I = 0
           *  N / n = N
           *  N / 0 = N
           *  N / N = N
           *  N / I = N
           *  I / n = I
           *  I / 0 = I
           *  I / N = N
           *  I / I = N
           *
           * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
           * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
           */


          P.dividedBy = P.div = function (y, b) {
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
          };
          /*
           * Return a new BigNumber whose value is the integer part of dividing the value of this
           * BigNumber by the value of BigNumber(y, b).
           */


          P.dividedToIntegerBy = P.idiv = function (y, b) {
            return div(this, new BigNumber(y, b), 0, 1);
          };
          /*
           * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
           *
           * If m is present, return the result modulo m.
           * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
           * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
           *
           * The modular power operation works efficiently when x, n, and m are integers, otherwise it
           * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
           *
           * n {number|string|BigNumber} The exponent. An integer.
           * [m] {number|string|BigNumber} The modulus.
           *
           * '[BigNumber Error] Exponent not an integer: {n}'
           */


          P.exponentiatedBy = P.pow = function (n, m) {
            var half,
                isModExp,
                i,
                k,
                more,
                nIsBig,
                nIsNeg,
                nIsOdd,
                y,
                x = this;
            n = new BigNumber(n); // Allow NaN and ±Infinity, but not other non-integers.

            if (n.c && !n.isInteger()) {
              throw Error(bignumberError + 'Exponent not an integer: ' + valueOf(n));
            }

            if (m != null) m = new BigNumber(m); // Exponent of MAX_SAFE_INTEGER is 15.

            nIsBig = n.e > 14; // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.

            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
              // The sign of the result of pow when x is negative depends on the evenness of n.
              // If +n overflows to ±Infinity, the evenness of n would be not be known.
              y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
              return m ? y.mod(m) : y;
            }

            nIsNeg = n.s < 0;

            if (m) {
              // x % m returns NaN if abs(m) is zero, or m is NaN.
              if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
              isModExp = !nIsNeg && x.isInteger() && m.isInteger();
              if (isModExp) x = x.mod(m); // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
              // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 // [1, 240000000]
            ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 // [80000000000000]  [99999750000000]
            : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
              // If x is negative and n is odd, k = -0, else k = 0.
              k = x.s < 0 && isOdd(n) ? -0 : 0; // If x >= 1, k = ±Infinity.

              if (x.e > -1) k = 1 / k; // If n is negative return ±0, else return ±Infinity.

              return new BigNumber(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) {
              // Truncating each coefficient array to a length of k after each multiplication
              // equates to truncating significant digits to POW_PRECISION + [28, 41],
              // i.e. there will be a minimum of 28 guard digits retained.
              k = mathceil(POW_PRECISION / LOG_BASE + 2);
            }

            if (nIsBig) {
              half = new BigNumber(0.5);
              if (nIsNeg) n.s = 1;
              nIsOdd = isOdd(n);
            } else {
              i = Math.abs(+valueOf(n));
              nIsOdd = i % 2;
            }

            y = new BigNumber(ONE); // Performs 54 loop iterations for n of 9007199254740991.

            for (;;) {
              if (nIsOdd) {
                y = y.times(x);
                if (!y.c) break;

                if (k) {
                  if (y.c.length > k) y.c.length = k;
                } else if (isModExp) {
                  y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                }
              }

              if (i) {
                i = mathfloor(i / 2);
                if (i === 0) break;
                nIsOdd = i % 2;
              } else {
                n = n.times(half);
                round(n, n.e + 1, 1);

                if (n.e > 14) {
                  nIsOdd = isOdd(n);
                } else {
                  i = +valueOf(n);
                  if (i === 0) break;
                  nIsOdd = i % 2;
                }
              }

              x = x.times(x);

              if (k) {
                if (x.c && x.c.length > k) x.c.length = k;
              } else if (isModExp) {
                x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
              }
            }

            if (isModExp) return y;
            if (nIsNeg) y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
          };
          /*
           * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
           * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
           *
           * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
           */


          P.integerValue = function (rm) {
            var n = new BigNumber(this);
            if (rm == null) rm = ROUNDING_MODE;else intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
          };
          /*
           * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
           * otherwise return false.
           */


          P.isEqualTo = P.eq = function (y, b) {
            return compare(this, new BigNumber(y, b)) === 0;
          };
          /*
           * Return true if the value of this BigNumber is a finite number, otherwise return false.
           */


          P.isFinite = function () {
            return !!this.c;
          };
          /*
           * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
           * otherwise return false.
           */


          P.isGreaterThan = P.gt = function (y, b) {
            return compare(this, new BigNumber(y, b)) > 0;
          };
          /*
           * Return true if the value of this BigNumber is greater than or equal to the value of
           * BigNumber(y, b), otherwise return false.
           */


          P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
          };
          /*
           * Return true if the value of this BigNumber is an integer, otherwise return false.
           */


          P.isInteger = function () {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
          };
          /*
           * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
           * otherwise return false.
           */


          P.isLessThan = P.lt = function (y, b) {
            return compare(this, new BigNumber(y, b)) < 0;
          };
          /*
           * Return true if the value of this BigNumber is less than or equal to the value of
           * BigNumber(y, b), otherwise return false.
           */


          P.isLessThanOrEqualTo = P.lte = function (y, b) {
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
          };
          /*
           * Return true if the value of this BigNumber is NaN, otherwise return false.
           */


          P.isNaN = function () {
            return !this.s;
          };
          /*
           * Return true if the value of this BigNumber is negative, otherwise return false.
           */


          P.isNegative = function () {
            return this.s < 0;
          };
          /*
           * Return true if the value of this BigNumber is positive, otherwise return false.
           */


          P.isPositive = function () {
            return this.s > 0;
          };
          /*
           * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
           */


          P.isZero = function () {
            return !!this.c && this.c[0] == 0;
          };
          /*
           *  n - 0 = n
           *  n - N = N
           *  n - I = -I
           *  0 - n = -n
           *  0 - 0 = 0
           *  0 - N = N
           *  0 - I = -I
           *  N - n = N
           *  N - 0 = N
           *  N - N = N
           *  N - I = N
           *  I - n = I
           *  I - 0 = I
           *  I - N = N
           *  I - I = N
           *
           * Return a new BigNumber whose value is the value of this BigNumber minus the value of
           * BigNumber(y, b).
           */


          P.minus = function (y, b) {
            var i,
                j,
                t,
                xLTy,
                x = this,
                a = x.s;
            y = new BigNumber(y, b);
            b = y.s; // Either NaN?

            if (!a || !b) return new BigNumber(NaN); // Signs differ?

            if (a != b) {
              y.s = -b;
              return x.plus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if (!xe || !ye) {
              // Either Infinity?
              if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN); // Either zero?

              if (!xc[0] || !yc[0]) {
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0);
              }
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice(); // Determine which is the bigger number.

            if (a = xe - ye) {
              if (xLTy = a < 0) {
                a = -a;
                t = xc;
              } else {
                ye = xe;
                t = yc;
              }

              t.reverse(); // Prepend zeros to equalise exponents.

              for (b = a; b--; t.push(0)) {
                ;
              }

              t.reverse();
            } else {
              // Exponents equal. Check digit by digit.
              j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

              for (a = b = 0; b < j; b++) {
                if (xc[b] != yc[b]) {
                  xLTy = xc[b] < yc[b];
                  break;
                }
              }
            } // x < y? Point xc to the array of the bigger number.


            if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;
            b = (j = yc.length) - (i = xc.length); // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.

            if (b > 0) for (; b--; xc[i++] = 0) {
              ;
            }
            b = BASE - 1; // Subtract yc from xc.

            for (; j > a;) {
              if (xc[--j] < yc[j]) {
                for (i = j; i && !xc[--i]; xc[i] = b) {
                  ;
                }

                --xc[i];
                xc[j] += BASE;
              }

              xc[j] -= yc[j];
            } // Remove leading zeros and adjust exponent accordingly.


            for (; xc[0] == 0; xc.splice(0, 1), --ye) {
              ;
            } // Zero?


            if (!xc[0]) {
              // Following IEEE 754 (2008) 6.3,
              // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
              y.s = ROUNDING_MODE == 3 ? -1 : 1;
              y.c = [y.e = 0];
              return y;
            } // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.


            return normalise(y, xc, ye);
          };
          /*
           *   n % 0 =  N
           *   n % N =  N
           *   n % I =  n
           *   0 % n =  0
           *  -0 % n = -0
           *   0 % 0 =  N
           *   0 % N =  N
           *   0 % I =  0
           *   N % n =  N
           *   N % 0 =  N
           *   N % N =  N
           *   N % I =  N
           *   I % n =  N
           *   I % 0 =  N
           *   I % N =  N
           *   I % I =  N
           *
           * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
           * BigNumber(y, b). The result depends on the value of MODULO_MODE.
           */


          P.modulo = P.mod = function (y, b) {
            var q,
                s,
                x = this;
            y = new BigNumber(y, b); // Return NaN if x is Infinity or NaN, or y is NaN or zero.

            if (!x.c || !y.s || y.c && !y.c[0]) {
              return new BigNumber(NaN); // Return x if y is Infinity or x is zero.
            } else if (!y.c || x.c && !x.c[0]) {
              return new BigNumber(x);
            }

            if (MODULO_MODE == 9) {
              // Euclidian division: q = sign(y) * floor(x / abs(y))
              // r = x - qy    where  0 <= r < abs(y)
              s = y.s;
              y.s = 1;
              q = div(x, y, 0, 3);
              y.s = s;
              q.s *= s;
            } else {
              q = div(x, y, 0, MODULO_MODE);
            }

            y = x.minus(q.times(y)); // To match JavaScript %, ensure sign of zero is sign of dividend.

            if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
            return y;
          };
          /*
           *  n * 0 = 0
           *  n * N = N
           *  n * I = I
           *  0 * n = 0
           *  0 * 0 = 0
           *  0 * N = N
           *  0 * I = N
           *  N * n = N
           *  N * 0 = N
           *  N * N = N
           *  N * I = N
           *  I * n = I
           *  I * 0 = N
           *  I * N = N
           *  I * I = I
           *
           * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
           * of BigNumber(y, b).
           */


          P.multipliedBy = P.times = function (y, b) {
            var c,
                e,
                i,
                j,
                k,
                m,
                xcL,
                xlo,
                xhi,
                ycL,
                ylo,
                yhi,
                zc,
                base,
                sqrtBase,
                x = this,
                xc = x.c,
                yc = (y = new BigNumber(y, b)).c; // Either NaN, ±Infinity or ±0?

            if (!xc || !yc || !xc[0] || !yc[0]) {
              // Return NaN if either is NaN, or one is 0 and the other is Infinity.
              if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                y.c = y.e = y.s = null;
              } else {
                y.s *= x.s; // Return ±Infinity if either is ±Infinity.

                if (!xc || !yc) {
                  y.c = y.e = null; // Return ±0 if either is ±0.
                } else {
                  y.c = [0];
                  y.e = 0;
                }
              }

              return y;
            }

            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length; // Ensure xc points to longer array and xcL to its length.

            if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i; // Initialise the result array with zeros.

            for (i = xcL + ycL, zc = []; i--; zc.push(0)) {
              ;
            }

            base = BASE;
            sqrtBase = SQRT_BASE;

            for (i = ycL; --i >= 0;) {
              c = 0;
              ylo = yc[i] % sqrtBase;
              yhi = yc[i] / sqrtBase | 0;

              for (k = xcL, j = i + k; j > i;) {
                xlo = xc[--k] % sqrtBase;
                xhi = xc[k] / sqrtBase | 0;
                m = yhi * xlo + xhi * ylo;
                xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                zc[j--] = xlo % base;
              }

              zc[j] = c;
            }

            if (c) {
              ++e;
            } else {
              zc.splice(0, 1);
            }

            return normalise(y, zc, e);
          };
          /*
           * Return a new BigNumber whose value is the value of this BigNumber negated,
           * i.e. multiplied by -1.
           */


          P.negated = function () {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
          };
          /*
           *  n + 0 = n
           *  n + N = N
           *  n + I = I
           *  0 + n = n
           *  0 + 0 = 0
           *  0 + N = N
           *  0 + I = I
           *  N + n = N
           *  N + 0 = N
           *  N + N = N
           *  N + I = N
           *  I + n = I
           *  I + 0 = I
           *  I + N = N
           *  I + I = I
           *
           * Return a new BigNumber whose value is the value of this BigNumber plus the value of
           * BigNumber(y, b).
           */


          P.plus = function (y, b) {
            var t,
                x = this,
                a = x.s;
            y = new BigNumber(y, b);
            b = y.s; // Either NaN?

            if (!a || !b) return new BigNumber(NaN); // Signs differ?

            if (a != b) {
              y.s = -b;
              return x.minus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if (!xe || !ye) {
              // Return ±Infinity if either ±Infinity.
              if (!xc || !yc) return new BigNumber(a / 0); // Either zero?
              // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.

              if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice(); // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.

            if (a = xe - ye) {
              if (a > 0) {
                ye = xe;
                t = yc;
              } else {
                a = -a;
                t = xc;
              }

              t.reverse();

              for (; a--; t.push(0)) {
                ;
              }

              t.reverse();
            }

            a = xc.length;
            b = yc.length; // Point xc to the longer array, and b to the shorter length.

            if (a - b < 0) t = yc, yc = xc, xc = t, b = a; // Only start adding at yc.length - 1 as the further digits of xc can be ignored.

            for (a = 0; b;) {
              a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
              xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }

            if (a) {
              xc = [a].concat(xc);
              ++ye;
            } // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible


            return normalise(y, xc, ye);
          };
          /*
           * If sd is undefined or null or true or false, return the number of significant digits of
           * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
           * If sd is true include integer-part trailing zeros in the count.
           *
           * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
           * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
           * ROUNDING_MODE if rm is omitted.
           *
           * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
           *                     boolean: whether to count integer-part trailing zeros: true or false.
           * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
           */


          P.precision = P.sd = function (sd, rm) {
            var c,
                n,
                v,
                x = this;

            if (sd != null && sd !== !!sd) {
              intCheck(sd, 1, MAX);
              if (rm == null) rm = ROUNDING_MODE;else intCheck(rm, 0, 8);
              return round(new BigNumber(x), sd, rm);
            }

            if (!(c = x.c)) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;

            if (v = c[v]) {
              // Subtract the number of trailing zeros of the last element.
              for (; v % 10 == 0; v /= 10, n--) {
                ;
              } // Add the number of digits of the first element.


              for (v = c[0]; v >= 10; v /= 10, n++) {
                ;
              }
            }

            if (sd && x.e + 1 > n) n = x.e + 1;
            return n;
          };
          /*
           * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
           * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
           *
           * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
           */


          P.shiftedBy = function (k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times('1e' + k);
          };
          /*
           *  sqrt(-n) =  N
           *  sqrt(N) =  N
           *  sqrt(-I) =  N
           *  sqrt(I) =  I
           *  sqrt(0) =  0
           *  sqrt(-0) = -0
           *
           * Return a new BigNumber whose value is the square root of the value of this BigNumber,
           * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
           */


          P.squareRoot = P.sqrt = function () {
            var m,
                n,
                r,
                rep,
                t,
                x = this,
                c = x.c,
                s = x.s,
                e = x.e,
                dp = DECIMAL_PLACES + 4,
                half = new BigNumber('0.5'); // Negative/NaN/Infinity/zero?

            if (s !== 1 || !c || !c[0]) {
              return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            } // Initial estimate.


            s = Math.sqrt(+valueOf(x)); // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.

            if (s == 0 || s == 1 / 0) {
              n = coeffToString(c);
              if ((n.length + e) % 2 == 0) n += '0';
              s = Math.sqrt(+n);
              e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

              if (s == 1 / 0) {
                n = '5e' + e;
              } else {
                n = s.toExponential();
                n = n.slice(0, n.indexOf('e') + 1) + e;
              }

              r = new BigNumber(n);
            } else {
              r = new BigNumber(s + '');
            } // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.


            if (r.c[0]) {
              e = r.e;
              s = e + dp;
              if (s < 3) s = 0; // Newton-Raphson iteration.

              for (;;) {
                t = r;
                r = half.times(t.plus(div(x, t, dp, 1)));

                if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                  // The exponent of r may here be one less than the final result exponent,
                  // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                  // are indexed correctly.
                  if (r.e < e) --s;
                  n = n.slice(s - 3, s + 1); // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                  // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                  // iteration.

                  if (n == '9999' || !rep && n == '4999') {
                    // On the first iteration only, check to see if rounding up gives the
                    // exact result as the nines may infinitely repeat.
                    if (!rep) {
                      round(t, t.e + DECIMAL_PLACES + 2, 0);

                      if (t.times(t).eq(x)) {
                        r = t;
                        break;
                      }
                    }

                    dp += 4;
                    s += 4;
                    rep = 1;
                  } else {
                    // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                    // result. If not, then there are further digits and m will be truthy.
                    if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                      // Truncate to the first rounding digit.
                      round(r, r.e + DECIMAL_PLACES + 2, 1);
                      m = !r.times(r).eq(x);
                    }

                    break;
                  }
                }
              }
            }

            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
          };
          /*
           * Return a string representing the value of this BigNumber in exponential notation and
           * rounded using ROUNDING_MODE to dp fixed decimal places.
           *
           * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
           * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
           */


          P.toExponential = function (dp, rm) {
            if (dp != null) {
              intCheck(dp, 0, MAX);
              dp++;
            }

            return format(this, dp, rm, 1);
          };
          /*
           * Return a string representing the value of this BigNumber in fixed-point notation rounding
           * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
           *
           * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
           * but e.g. (-0.00001).toFixed(0) is '-0'.
           *
           * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
           * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
           */


          P.toFixed = function (dp, rm) {
            if (dp != null) {
              intCheck(dp, 0, MAX);
              dp = dp + this.e + 1;
            }

            return format(this, dp, rm);
          };
          /*
           * Return a string representing the value of this BigNumber in fixed-point notation rounded
           * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
           * of the format or FORMAT object (see BigNumber.set).
           *
           * The formatting object may contain some or all of the properties shown below.
           *
           * FORMAT = {
           *   prefix: '',
           *   groupSize: 3,
           *   secondaryGroupSize: 0,
           *   groupSeparator: ',',
           *   decimalSeparator: '.',
           *   fractionGroupSize: 0,
           *   fractionGroupSeparator: '\xA0',      // non-breaking space
           *   suffix: ''
           * };
           *
           * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
           * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
           * [format] {object} Formatting options. See FORMAT pbject above.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
           * '[BigNumber Error] Argument not an object: {format}'
           */


          P.toFormat = function (dp, rm, format) {
            var str,
                x = this;

            if (format == null) {
              if (dp != null && rm && typeof rm == 'object') {
                format = rm;
                rm = null;
              } else if (dp && typeof dp == 'object') {
                format = dp;
                dp = rm = null;
              } else {
                format = FORMAT;
              }
            } else if (typeof format != 'object') {
              throw Error(bignumberError + 'Argument not an object: ' + format);
            }

            str = x.toFixed(dp, rm);

            if (x.c) {
              var i,
                  arr = str.split('.'),
                  g1 = +format.groupSize,
                  g2 = +format.secondaryGroupSize,
                  groupSeparator = format.groupSeparator || '',
                  intPart = arr[0],
                  fractionPart = arr[1],
                  isNeg = x.s < 0,
                  intDigits = isNeg ? intPart.slice(1) : intPart,
                  len = intDigits.length;
              if (g2) i = g1, g1 = g2, g2 = i, len -= i;

              if (g1 > 0 && len > 0) {
                i = len % g1 || g1;
                intPart = intDigits.substr(0, i);

                for (; i < len; i += g1) {
                  intPart += groupSeparator + intDigits.substr(i, g1);
                }

                if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                if (isNeg) intPart = '-' + intPart;
              }

              str = fractionPart ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + (format.fractionGroupSeparator || '')) : fractionPart) : intPart;
            }

            return (format.prefix || '') + str + (format.suffix || '');
          };
          /*
           * Return an array of two BigNumbers representing the value of this BigNumber as a simple
           * fraction with an integer numerator and an integer denominator.
           * The denominator will be a positive non-zero value less than or equal to the specified
           * maximum denominator. If a maximum denominator is not specified, the denominator will be
           * the lowest value necessary to represent the number exactly.
           *
           * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
           *
           * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
           */


          P.toFraction = function (md) {
            var d,
                d0,
                d1,
                d2,
                e,
                exp,
                n,
                n0,
                n1,
                q,
                r,
                s,
                x = this,
                xc = x.c;

            if (md != null) {
              n = new BigNumber(md); // Throw if md is less than one or is not an integer, unless it is Infinity.

              if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
                throw Error(bignumberError + 'Argument ' + (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
              }
            }

            if (!xc) return new BigNumber(x);
            d = new BigNumber(ONE);
            n1 = d0 = new BigNumber(ONE);
            d1 = n0 = new BigNumber(ONE);
            s = coeffToString(xc); // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.

            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s); // n0 = d1 = 0

            n0.c[0] = 0;

            for (;;) {
              q = div(n, d, 0, 1);
              d2 = d0.plus(q.times(d1));
              if (d2.comparedTo(md) == 1) break;
              d0 = d1;
              d1 = d2;
              n1 = n0.plus(q.times(d2 = n1));
              n0 = d2;
              d = n.minus(q.times(d2 = d));
              n = d2;
            }

            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2; // Determine which fraction is closer to x, n0/d0 or n1/d1

            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
            MAX_EXP = exp;
            return r;
          };
          /*
           * Return the value of this BigNumber converted to a number primitive.
           */


          P.toNumber = function () {
            return +valueOf(this);
          };
          /*
           * Return a string representing the value of this BigNumber rounded to sd significant digits
           * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
           * necessary to represent the integer part of the value in fixed-point notation, then use
           * exponential notation.
           *
           * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
           * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
           *
           * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
           */


          P.toPrecision = function (sd, rm) {
            if (sd != null) intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
          };
          /*
           * Return a string representing the value of this BigNumber in base b, or base 10 if b is
           * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
           * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
           * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
           * TO_EXP_NEG, return exponential notation.
           *
           * [b] {number} Integer, 2 to ALPHABET.length inclusive.
           *
           * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
           */


          P.toString = function (b) {
            var str,
                n = this,
                s = n.s,
                e = n.e; // Infinity or NaN?

            if (e === null) {
              if (s) {
                str = 'Infinity';
                if (s < 0) str = '-' + str;
              } else {
                str = 'NaN';
              }
            } else {
              if (b == null) {
                str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, '0');
              } else if (b === 10) {
                n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                str = toFixedPoint(coeffToString(n.c), n.e, '0');
              } else {
                intCheck(b, 2, ALPHABET.length, 'Base');
                str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
              }

              if (s < 0 && n.c[0]) str = '-' + str;
            }

            return str;
          };
          /*
           * Return as toString, but do not accept a base argument, and include the minus sign for
           * negative zero.
           */


          P.valueOf = P.toJSON = function () {
            return valueOf(this);
          };

          P._isBigNumber = true;
          if (configObject != null) BigNumber.set(configObject);
          return BigNumber;
        } // PRIVATE HELPER FUNCTIONS
        // These functions don't need access to variables,
        // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


        function bitFloor(n) {
          var i = n | 0;
          return n > 0 || n === i ? i : i - 1;
        } // Return a coefficient array as a string of base 10 digits.


        function coeffToString(a) {
          var s,
              z,
              i = 1,
              j = a.length,
              r = a[0] + '';

          for (; i < j;) {
            s = a[i++] + '';
            z = LOG_BASE - s.length;

            for (; z--; s = '0' + s) {
              ;
            }

            r += s;
          } // Determine trailing zeros.


          for (j = r.length; r.charCodeAt(--j) === 48;) {
            ;
          }

          return r.slice(0, j + 1 || 1);
        } // Compare the value of BigNumbers x and y.


        function compare(x, y) {
          var a,
              b,
              xc = x.c,
              yc = y.c,
              i = x.s,
              j = y.s,
              k = x.e,
              l = y.e; // Either NaN?

          if (!i || !j) return null;
          a = xc && !xc[0];
          b = yc && !yc[0]; // Either zero?

          if (a || b) return a ? b ? 0 : -j : i; // Signs differ?

          if (i != j) return i;
          a = i < 0;
          b = k == l; // Either Infinity?

          if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1; // Compare exponents.

          if (!b) return k > l ^ a ? 1 : -1;
          j = (k = xc.length) < (l = yc.length) ? k : l; // Compare digit by digit.

          for (i = 0; i < j; i++) {
            if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
          } // Compare lengths.


          return k == l ? 0 : k > l ^ a ? 1 : -1;
        }
        /*
         * Check that n is a primitive number, an integer, and in range, otherwise throw.
         */


        function intCheck(n, min, max, name) {
          if (n < min || n > max || n !== mathfloor(n)) {
            throw Error(bignumberError + (name || 'Argument') + (typeof n == 'number' ? n < min || n > max ? ' out of range: ' : ' not an integer: ' : ' not a primitive number: ') + String(n));
          }
        } // Assumes finite n.


        function isOdd(n) {
          var k = n.c.length - 1;
          return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
        }

        function toExponential(str, e) {
          return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) + (e < 0 ? 'e' : 'e+') + e;
        }

        function toFixedPoint(str, e, z) {
          var len, zs; // Negative exponent?

          if (e < 0) {
            // Prepend zeros.
            for (zs = z + '.'; ++e; zs += z) {
              ;
            }

            str = zs + str; // Positive exponent
          } else {
            len = str.length; // Append zeros.

            if (++e > len) {
              for (zs = z, e -= len; --e; zs += z) {
                ;
              }

              str += zs;
            } else if (e < len) {
              str = str.slice(0, e) + '.' + str.slice(e);
            }
          }

          return str;
        } // EXPORT


        BigNumber = clone();
        BigNumber['default'] = BigNumber.BigNumber = BigNumber; // AMD.

        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return BigNumber;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Node.js and other environments that support module.exports.
        } else {}
      })(this);
      /***/

    },

    /***/
    "iIrt":
    /*!****************************************************!*\
      !*** ./src/app/layouts/footer/footer.component.ts ***!
      \****************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function iIrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 25,
        vars: 0,
        consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "d-md-flex", "align-items-center", "left-footer"], ["href", "#"], [1, "col-md-4", "text-md-right"], [1, "footer_icons"], ["src", "../../../assets/images/facebook.svg"], ["src", "../../../assets/images/twitter.svg"], ["src", "../../../assets/images/instagram.svg"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA9 Copyright 2020 spacechain.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Terms & Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "tEpS":
    /*!********************************!*\
      !*** ./src/app/helpers/api.ts ***!
      \********************************/

    /*! exports provided: apiGetAccountAssets, apiGetAccountNonce, apiGetGasPrices */

    /***/
    function tEpS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiGetAccountAssets", function () {
        return apiGetAccountAssets;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiGetAccountNonce", function () {
        return apiGetAccountNonce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiGetGasPrices", function () {
        return apiGetGasPrices;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

      var api = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
        baseURL: "https://ethereum-api.xyz",
        timeout: 30000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      function apiGetAccountAssets(address, chainId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
          var response, result;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return api.get("/account-assets?address=".concat(address, "&chainId=").concat(chainId));

                case 2:
                  response = _context26.sent;
                  result = response.data.result;
                  return _context26.abrupt("return", result);

                case 5:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26);
        }));
      }

      var apiGetAccountNonce = function apiGetAccountNonce(address, chainId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
          var response, result;
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.next = 2;
                  return api.get("/account-nonce?address=".concat(address, "&chainId=").concat(chainId));

                case 2:
                  response = _context27.sent;
                  result = response.data.result;
                  return _context27.abrupt("return", result);

                case 5:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27);
        }));
      };

      var apiGetGasPrices = function apiGetGasPrices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
          var response, result;
          return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  _context28.next = 2;
                  return api.get("/gas-prices");

                case 2:
                  response = _context28.sent;
                  result = response.data.result;
                  return _context28.abrupt("return", result);

                case 5:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee28);
        }));
      };
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-wallet/my-wallet.component */
      "2XdG");

      var routes = [{
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: "Mywallet/:id",
        component: _my_wallet_my_wallet_component__WEBPACK_IMPORTED_MODULE_3__["MyWalletComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "x/wV":
    /*!***********************************************!*\
      !*** ./src/app/api-wallet-connect.service.ts ***!
      \***********************************************/

    /*! exports provided: ApiWalletConnectService */

    /***/
    function xWV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiWalletConnectService", function () {
        return ApiWalletConnectService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! web3 */
      "meUc");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _walletconnect_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @walletconnect/client */
      "wVYR");
      /* harmony import */


      var _walletconnect_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_client__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @walletconnect/qrcode-modal */
      "dFyl");
      /* harmony import */


      var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./helpers/utils */
      "BGy5");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @walletconnect/web3-provider */
      "MHx8");
      /* harmony import */


      var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _helpers_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./helpers/api */
      "tEpS");
      /* harmony import */


      var _helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./helpers/bignumber */
      "IDLs");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ApiWalletConnectService = /*#__PURE__*/function () {
        function ApiWalletConnectService(route, http, toaster, router) {
          var _this22 = this;

          _classCallCheck(this, ApiWalletConnectService);

          this.route = route;
          this.http = http;
          this.toaster = toaster;
          this.router = router;
          this.behave = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
          this.onConnectBehave = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](''); // -------------------------wallet Connect code

          this.walletConnectInit = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var bridge, connector;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      // bridge url
                      bridge = "https://bridge.walletconnect.org"; // create new connector

                      connector = new _walletconnect_client__WEBPACK_IMPORTED_MODULE_4___default.a({
                        bridge: bridge,
                        qrcodeModal: _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_5___default.a
                      });
                      this.connector = connector; // check if already connected

                      if (connector.connected) {
                        _context29.next = 6;
                        break;
                      }

                      _context29.next = 6;
                      return connector.createSession();

                    case 6:
                      _context29.next = 8;
                      return this.subscribeToEvents();

                    case 8:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          };

          this.subscribeToEvents = function () {
            if (!_this22.connector) {
              return;
            }

            _this22.connector.on("session_update", function (error, payload) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                return regeneratorRuntime.wrap(function _callee30$(_context30) {
                  while (1) {
                    switch (_context30.prev = _context30.next) {
                      case 0:
                        console.log("connector.on(\"session_update\")", payload);

                        if (!error) {
                          _context30.next = 3;
                          break;
                        }

                        throw error;

                      case 3:
                      case "end":
                        return _context30.stop();
                    }
                  }
                }, _callee30);
              }));
            });

            _this22.connector.on("connect", function (error, payload) {
              var activeChain = _this22.connector.chainId ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["getChainData"])(_this22.connector.chainId).name : null;
              var address = _this22.connector.accounts[0];

              if (error) {
                throw error;
              }

              _this22.setBehaviorView({
                walletAddress: address,
                networkName: activeChain,
                connected: true,
                chainId: _this22.connector.chainId
              });

              _this22.setOnConnectBehaviorView({
                connected: true
              }); // this.onConnect(payload);

            });

            _this22.connector.on("disconnect", function (error, payload) {
              console.log("connector.on(\"disconnect\")", payload);

              _this22.killSession();

              if (error) {
                throw error;
              }

              _this22.setBehaviorView({
                walletAddress: '',
                networkName: '',
                connected: false,
                chainId: 0
              });
            });

            _this22.connector = _this22.connector;
          };

          this.getBalance1 = function (contractInstance, walletAddress) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var temp;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return contractInstance.methods.balanceOf(walletAddress).call({
                        from: walletAddress
                      });

                    case 2:
                      temp = _context31.sent;
                      _context31.next = 5;
                      return temp / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue;

                    case 5:
                      return _context31.abrupt("return", _context31.sent);

                    case 7:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31);
            }));
          };

          this.getBalance2 = function (contractInstance, walletAddress) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var temp;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return contractInstance.methods.balanceOf(walletAddress).call({
                        from: walletAddress
                      });

                    case 2:
                      temp = _context32.sent;
                      _context32.next = 5;
                      return temp / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue;

                    case 5:
                      return _context32.abrupt("return", _context32.sent);

                    case 6:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }));
          };

          this.killSession = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      if (this.connector) {
                        this.connector.killSession();
                        this.connector = '';
                      }

                      this.router.navigateByUrl("/");

                    case 2:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          };

          var that = this;
          var provider = new _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_8___default.a({
            infuraId: "5918063957ef4e8bae0348d54fa14ebb" // Required

          });

          if (provider) {
            if (provider.wc && provider.wc['_connected']) {
              console.log('-----------conne', provider.wc['_chainId']);
              var activeChain = provider.wc['_chainId'] ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["getChainData"])(provider.wc['_chainId']).name : null;
              this.setBehaviorView({
                walletAddress: provider.wc['_accounts'][0],
                networkName: activeChain,
                connected: true,
                chainId: provider.wc['_chainId']
              });
              provider.on("open", function (d) {
                console.log("open", d);
              });
            } else {
              console.log('---------not--conne');
              this.setBehaviorView({
                walletAddress: '',
                networkName: '',
                connected: false,
                chainId: 0
              });
            }
          }

          console.log('---------------provider--------||', provider);
        }

        _createClass(ApiWalletConnectService, [{
          key: "setBehaviorView",
          value: function setBehaviorView(behave) {
            this.behave.next(behave);
          }
          /** Get Behavior for user registraion */

        }, {
          key: "getBehaviorView",
          value: function getBehaviorView() {
            return this.behave.asObservable();
          }
        }, {
          key: "setOnConnectBehaviorView",
          value: function setOnConnectBehaviorView(behave) {
            this.onConnectBehave.next(behave);
          }
          /** Get Behavior for user registraion */

        }, {
          key: "getOnConnectBehaviorView",
          value: function getOnConnectBehaviorView() {
            return this.onConnectBehave.asObservable();
          }
        }, {
          key: "exportInstance1",
          value: function exportInstance1(networkName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              var web3;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      console.log('----------------------', networkName);

                      if (networkName == 'Ropsten') {
                        web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a("https://ropsten.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
                      } else if (networkName == 'Mainnet') {
                        web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a("https://mainnet.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
                      }

                      _context34.next = 4;
                      return new web3.eth.Contract(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ABI1, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contractAddress1);

                    case 4:
                      return _context34.abrupt("return", _context34.sent);

                    case 5:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34);
            }));
          }
        }, {
          key: "exportInstance2",
          value: function exportInstance2(networkName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var web3;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      if (networkName == 'Ropsten') {
                        web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a("https://ropsten.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
                      } else if (networkName == 'Mainnet') {
                        web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a("https://mainnet.infura.io/v3/5918063957ef4e8bae0348d54fa14ebb");
                      }

                      _context35.next = 3;
                      return new web3.eth.Contract(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ABI2, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contractAddress2);

                    case 3:
                      return _context35.abrupt("return", _context35.sent);

                    case 4:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35);
            }));
          }
        }, {
          key: "tokenUpgrader",
          value: function tokenUpgrader(walletAddress, contractInstance2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var uniqueAddress;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return contractInstance2.methods.tokenUpgrader(walletAddress).call({
                        from: walletAddress
                      });

                    case 2:
                      uniqueAddress = _context36.sent;

                      if (!uniqueAddress) {
                        _context36.next = 7;
                        break;
                      }

                      return _context36.abrupt("return", uniqueAddress);

                    case 7:
                      return _context36.abrupt("return", 'err');

                    case 8:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36);
            }));
          }
        }, {
          key: "createUpgrader",
          value: function createUpgrader(contractInstance2, walletAdder, chainId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var from, to, _nonce, nonce, gasPrices, _gasPrice, gasPrice, _gasLimit, gasLimit, _value, value, uniqueAddress, txnObject;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      from = walletAdder;
                      to = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contractAddress2;
                      _context37.next = 4;
                      return Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetAccountNonce"])(walletAdder, chainId);

                    case 4:
                      _nonce = _context37.sent;
                      nonce = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_nonce));
                      _context37.next = 8;
                      return Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetGasPrices"])();

                    case 8:
                      gasPrices = _context37.sent;
                      _gasPrice = 100;
                      gasPrice = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(_gasPrice, 9)));
                      _gasLimit = 30000;
                      gasLimit = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_gasLimit));
                      _value = 0;
                      value = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_value));
                      _context37.next = 17;
                      return this.walletConnectInit();

                    case 17:
                      _context37.next = 19;
                      return contractInstance2.methods.createUpgrader().encodeABI();

                    case 19:
                      uniqueAddress = _context37.sent;

                      if (!uniqueAddress) {
                        _context37.next = 36;
                        break;
                      }

                      _context37.t0 = from;
                      _context37.t1 = to;
                      _context37.next = 25;
                      return uniqueAddress;

                    case 25:
                      _context37.t2 = _context37.sent;
                      txnObject = {
                        from: _context37.t0,
                        to: _context37.t1,
                        data: _context37.t2
                      };
                      console.log('-------uniqueAddress------', uniqueAddress);
                      console.log('-------------', txnObject); // Send transaction

                      if (!this.connector) {
                        _context37.next = 33;
                        break;
                      }

                      return _context37.abrupt("return", this.connector.sendTransaction(txnObject).then(function (result) {
                        // Returns transaction id (hash)
                        return result;
                      })["catch"](function (error) {
                        // Error returned when rejected
                        return;
                      }));

                    case 33:
                      console.log('-------------else');

                    case 34:
                      _context37.next = 37;
                      break;

                    case 36:
                      return _context37.abrupt("return", 'err');

                    case 37:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "transfer",
          value: function transfer(uniqueAddress, balance, contractInstance1, walletAdder, chainId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              var from, to, _nonce, nonce, gasPrices, _gasPrice, gasPrice, _gasLimit, gasLimit, receipt, txnObject;

              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      from = walletAdder;
                      to = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contractAddress1;
                      _context38.next = 4;
                      return Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetAccountNonce"])(walletAdder, chainId);

                    case 4:
                      _nonce = _context38.sent;
                      nonce = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_nonce));
                      _context38.next = 8;
                      return Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetGasPrices"])();

                    case 8:
                      gasPrices = _context38.sent;
                      _gasPrice = gasPrices.slow.price;
                      gasPrice = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(_gasPrice, 9)));
                      _gasLimit = 300000;
                      gasLimit = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_gasLimit));
                      _context38.next = 15;
                      return this.walletConnectInit();

                    case 15:
                      //--------------------
                      balance = Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(balance);
                      _context38.next = 18;
                      return contractInstance1.methods.transfer(uniqueAddress, balance).encodeABI();

                    case 18:
                      receipt = _context38.sent;

                      if (!receipt) {
                        _context38.next = 36;
                        break;
                      }

                      _context38.t0 = from;
                      _context38.t1 = to;
                      _context38.t2 = gasPrice;
                      _context38.t3 = gasLimit;
                      _context38.t4 = nonce;
                      _context38.next = 27;
                      return receipt;

                    case 27:
                      _context38.t5 = _context38.sent;
                      txnObject = {
                        from: _context38.t0,
                        to: _context38.t1,
                        gasPrice: _context38.t2,
                        gas: _context38.t3,
                        nonce: _context38.t4,
                        data: _context38.t5
                      };

                      if (!this.connector) {
                        _context38.next = 33;
                        break;
                      }

                      return _context38.abrupt("return", this.connector.sendTransaction(txnObject).then(function (result) {
                        // Returns transaction id (hash)
                        return result;
                      })["catch"](function (error) {
                        // Error returned when rejected
                        return;
                      }));

                    case 33:
                      console.log('-------------else');

                    case 34:
                      _context38.next = 37;
                      break;

                    case 36:
                      return _context38.abrupt("return", 'err');

                    case 37:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "migrateV1tokens",
          value: function migrateV1tokens(contractInstance2, walletAdder, chainId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              var from, to, _nonce, nonce, gasPrices, _gasPrice, gasPrice, _gasLimit, gasLimit, receipt, txnObject;

              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      from = walletAdder;
                      to = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contractAddress2;
                      _context39.next = 4;
                      return Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetAccountNonce"])(walletAdder, chainId);

                    case 4:
                      _nonce = _context39.sent;
                      nonce = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_nonce));
                      _context39.next = 8;
                      return Object(_helpers_api__WEBPACK_IMPORTED_MODULE_9__["apiGetGasPrices"])();

                    case 8:
                      gasPrices = _context39.sent;
                      _gasPrice = 21;
                      gasPrice = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertAmountToRawNumber"])(_gasPrice, 9)));
                      _gasLimit = 30000;
                      gasLimit = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["sanitizeHex"])(Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_10__["convertStringToHex"])(_gasLimit)); // const _value = 0;
                      // const value = sanitizeHex(convertStringToHex(_value));

                      _context39.next = 15;
                      return this.walletConnectInit();

                    case 15:
                      _context39.next = 17;
                      return contractInstance2.methods.migrateV1tokens().encodeABI();

                    case 17:
                      receipt = _context39.sent;

                      if (!receipt) {
                        _context39.next = 28;
                        break;
                      }

                      _context39.t0 = from;
                      _context39.t1 = to;
                      _context39.next = 23;
                      return receipt;

                    case 23:
                      _context39.t2 = _context39.sent;
                      txnObject = {
                        from: _context39.t0,
                        to: _context39.t1,
                        data: _context39.t2
                      };
                      return _context39.abrupt("return", this.connector.sendTransaction(txnObject).then(function (result) {
                        console.log('-------------if', result); // Returns transaction id (hash)

                        return result;
                      })["catch"](function (error) {
                        // Error returned when rejected
                        console.log('-------------if', error);
                        return error;
                      }));

                    case 28:
                      return _context39.abrupt("return", 'err');

                    case 29:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }]);

        return ApiWalletConnectService;
      }();

      ApiWalletConnectService.ɵfac = function ApiWalletConnectService_Factory(t) {
        return new (t || ApiWalletConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
      };

      ApiWalletConnectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiWalletConnectService,
        factory: ApiWalletConnectService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiWalletConnectService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yTNM":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function yTNM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! web3 */
      "meUc");
      /* harmony import */


      var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _helpers_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./helpers/bignumber */
      "IDLs");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(route, http, toaster, router) {
          _classCallCheck(this, ApiService);

          this.route = route;
          this.http = http;
          this.toaster = toaster;
          this.router = router;
          var that = this;

          if (window.ethereum) {
            window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(window.web3.currentProvider);
            window.ethereum.autoRefreshOnNetworkChange = true;
          } // Legacy dapp browsers...
          else if (window.web3) {// commented for future use
            }
        }

        _createClass(ApiService, [{
          key: "getNetworkName",
          value: function getNetworkName() {
            if (window.ethereum && window.ethereum.chainId) {
              if (window.ethereum.chainId == "0x1") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].main;
              }

              if (window.ethereum.chainId == "0x3") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rops;
              }

              if (window.ethereum.chainId == "0x4") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rinkeby;
              }

              if (window.ethereum.chainId == "0x5") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Goerli;
              }

              if (window.ethereum.chainId == "0x2a") {
                return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Kovan;
              }
            }
          }
        }, {
          key: "connect",
          value: function connect() {
            if (window.ethereum) {
              // commented for future use
              return new Promise(function (resolve, reject) {
                var temp = window.ethereum.enable();

                if (temp) {
                  resolve(temp);
                } else {
                  reject('err');
                }
              });
            }
          }
        }, {
          key: "exportInstance1",
          value: function exportInstance1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return new window.web3.eth.Contract(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ABI1, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contractAddress1);

                    case 2:
                      return _context40.abrupt("return", _context40.sent);

                    case 3:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40);
            }));
          }
        }, {
          key: "exportInstance2",
          value: function exportInstance2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return new window.web3.eth.Contract(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ABI2, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contractAddress2);

                    case 2:
                      return _context41.abrupt("return", _context41.sent);

                    case 3:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41);
            }));
          }
        }, {
          key: "export",
          value: function _export() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      return _context42.abrupt("return", new Promise(function (resolve, reject) {
                        window.web3.eth.getAccounts(function (error, result) {
                          // just 1 min jo
                          if (error != null) {
                            alert("Error retrieving accounts.");
                            resolve([]);
                          }

                          if (result == undefined || result.length == 0) {
                            // alert("No account found! Make sure the Ethereum client is configured properly.");
                            resolve([]);
                          } else {
                            var account = result[0];
                            window.web3.eth.defaultAccount = account;
                            resolve(account);
                          }
                        });
                      }));

                    case 1:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42);
            }));
          }
        }, {
          key: "getSelectedAddress",
          value: function getSelectedAddress() {
            if (window.ethereum && window.ethereum.selectedAddress) {
              return window.ethereum.selectedAddress;
            }
          }
        }, {
          key: "getBalance1",
          value: function getBalance1(userWalletAccount, contractInstance) {
            var _this23 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
                var temp;
                return regeneratorRuntime.wrap(function _callee43$(_context43) {
                  while (1) {
                    switch (_context43.prev = _context43.next) {
                      case 0:
                        if (userWalletAccount) {
                          _context43.next = 4;
                          break;
                        }

                        console.log('Metamask/Wallet connection failed.');
                        this.toaster.error('Metamask/Wallet connection failed.');
                        return _context43.abrupt("return");

                      case 4:
                        _context43.next = 6;
                        return contractInstance.methods.balanceOf(userWalletAccount).call({
                          from: userWalletAccount
                        });

                      case 6:
                        temp = _context43.sent;

                        if (temp) {
                          resolve(temp / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
                        } else {
                          console.log('Please connect with metamask');
                          reject('err');
                        }

                      case 8:
                      case "end":
                        return _context43.stop();
                    }
                  }
                }, _callee43, this);
              }));
            });
          }
        }, {
          key: "getBalance2",
          value: function getBalance2(userWalletAccount, contractInstance) {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
                var temp;
                return regeneratorRuntime.wrap(function _callee44$(_context44) {
                  while (1) {
                    switch (_context44.prev = _context44.next) {
                      case 0:
                        if (userWalletAccount) {
                          _context44.next = 3;
                          break;
                        }

                        this.toaster.error('Metamask/Wallet connection failed.');
                        return _context44.abrupt("return");

                      case 3:
                        _context44.next = 5;
                        return contractInstance.methods.balanceOf(userWalletAccount).call({
                          from: userWalletAccount
                        });

                      case 5:
                        temp = _context44.sent;

                        if (temp) {
                          resolve(temp / src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].divideValue);
                        } else {
                          console.log('Please connect with metamask');
                          reject('err');
                        }

                      case 7:
                      case "end":
                        return _context44.stop();
                    }
                  }
                }, _callee44, this);
              }));
            });
          }
        }, {
          key: "tokenUpgrader",
          value: function tokenUpgrader(userWalletAccount, contractInstance2) {
            var _this25 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
                var uniqueAddress;
                return regeneratorRuntime.wrap(function _callee45$(_context45) {
                  while (1) {
                    switch (_context45.prev = _context45.next) {
                      case 0:
                        if (userWalletAccount) {
                          _context45.next = 4;
                          break;
                        }

                        console.log('Metamask/Wallet connection failed.');
                        this.toaster.error('Metamask/Wallet connection failed.');
                        return _context45.abrupt("return");

                      case 4:
                        _context45.next = 6;
                        return contractInstance2.methods.tokenUpgrader(userWalletAccount).call({
                          from: userWalletAccount
                        });

                      case 6:
                        uniqueAddress = _context45.sent;

                        if (uniqueAddress) {
                          resolve(uniqueAddress);
                        } else {
                          console.log('Please connect with metamask');
                          reject('err');
                        }

                      case 8:
                      case "end":
                        return _context45.stop();
                    }
                  }
                }, _callee45, this);
              }));
            });
          }
        }, {
          key: "createUpgrader",
          value: function createUpgrader(contractInstance2, walletAdder) {
            var _this26 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
                var uniqueAddress;
                return regeneratorRuntime.wrap(function _callee46$(_context46) {
                  while (1) {
                    switch (_context46.prev = _context46.next) {
                      case 0:
                        _context46.next = 2;
                        return contractInstance2.methods.createUpgrader().send({
                          from: walletAdder
                        });

                      case 2:
                        uniqueAddress = _context46.sent;

                        if (uniqueAddress) {
                          resolve(uniqueAddress);
                        } else {
                          console.log('Please connect with metamask');
                          reject('err');
                        }

                      case 4:
                      case "end":
                        return _context46.stop();
                    }
                  }
                }, _callee46);
              }));
            });
          }
        }, {
          key: "transfer",
          value: function transfer(uniqueAddress, balance, contractInstance1, walletAdder) {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
                var receipt;
                return regeneratorRuntime.wrap(function _callee47$(_context47) {
                  while (1) {
                    switch (_context47.prev = _context47.next) {
                      case 0:
                        _context47.next = 2;
                        return Object(_helpers_bignumber__WEBPACK_IMPORTED_MODULE_4__["convertAmountToRawNumber"])(balance);

                      case 2:
                        balance = _context47.sent;
                        console.log('--------------------------------3-', balance);
                        _context47.next = 6;
                        return contractInstance1.methods.transfer(uniqueAddress, balance).send({
                          from: walletAdder
                        });

                      case 6:
                        receipt = _context47.sent;

                        if (receipt) {
                          resolve(receipt);
                        } else {
                          console.log('Please connect with metamask');
                          reject('err');
                        }

                      case 8:
                      case "end":
                        return _context47.stop();
                    }
                  }
                }, _callee47);
              }));
            });
          }
        }, {
          key: "migrateV1tokens",
          value: function migrateV1tokens(contractInstance2, walletAdder) {
            var _this28 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
                var receipt;
                return regeneratorRuntime.wrap(function _callee48$(_context48) {
                  while (1) {
                    switch (_context48.prev = _context48.next) {
                      case 0:
                        _context48.next = 2;
                        return contractInstance2.methods.migrateV1tokens().send({
                          from: walletAdder
                        });

                      case 2:
                        receipt = _context48.sent;

                        if (receipt) {
                          resolve(receipt);
                        } else {
                          console.log('Please connect with metamask');
                          reject('err');
                        }

                      case 4:
                      case "end":
                        return _context48.stop();
                    }
                  }
                }, _callee48);
              }));
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map