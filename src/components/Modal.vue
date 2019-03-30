<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h4>Before you continue...</h4>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <p class="helper py-2">
				  Please take a moment to read through this short introduction and security warning. It’s very important for your own security that you understand that the generated key-pair provides exclusive access to your wallet. Anyone that has access to your private key has access to your funds. Ignoring this step will highly increase the chances of your funds being lost or stolen, in which case we won’t be able to help you. <br />
				  Contentos does not store your private key after registration, it is your responsibility to backup and safely store this private key in a secure place, preferably encrypted. </p>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
				 <button class="btn btn-block" @click="$emit('cancel')">Take me back.</button>
              <button class="btn btn-block" @click="$emit('close')">Continue, I understand the risks.</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
  @import "../../static/scss/common";
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    position: relative;
    width: 400px;
    margin: 0 auto;
    transition: all .3s ease;
  }
  .modal-header{
    background-color: #f7f7f7;
    text-align: center;
    position: relative;
  }
  .modal-body {
    background-color: #f7f7f7;
  }
  .modal-footer {
    background-color: #f7f7f7;
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
