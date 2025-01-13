export function UploadButton({ onUpload, imageSrc }) {
	return (
		<div className="upload-box">
			<div className="upload-area">
				{!imageSrc && (
					<>
						<div className="upload-text">Subir foto</div>
						<label htmlFor="fileInput" className="file-button">
							<div className="button-text">Elige un Archivo</div>
						</label>
					</>
				)}
				<input
					type="file"
					id="fileInput"
					className="visually-hidden"
					onChange={onUpload}
					accept="image/*"
					aria-label="Upload photo"
				/>
				{imageSrc && (
					<img
						src={imageSrc}
						alt="Imagen cargada"
						style={{ width: "300px", height: "300px", objectFit: "cover" }}
					/>
				)}
			</div>
		</div>
	);
}
