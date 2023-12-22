export function getMarkup(product) {
  return ` <h2 class="modal-title">${product.name}</h2>
        <div class="modal-box-info">
          <p class="classification">
            Category:<span class="modal-info">${product.category}</span>
          </p>
          <p class="classification">
            Size:<span class="modal-info">${product.size}</span>
          </p>
          <p class="classification">
            Popularity:<span class="modal-info">${product.popularity}</span>
          </p>
        </div>

        <p class="modal-description">
        ${product.desc}
        </p>
    `;
}
