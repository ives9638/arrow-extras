initSidebarItems({"fn":[["infer","Infer the data type of a record"],["infer_schema","Infer the schema of a CSV file by reading through the first n records of the file, with `max_rows` controlling the maximum number of records to read."],["new_boolean_array",""],["new_primitive_array","creates a new [`PrimitiveArray`] from a slice of [`ByteRecord`]."],["new_utf8_array",""],["parse","Parses a slice of [`ByteRecord`] into a [`RecordBatch`] using the parser `parser`."],["projected_schema",""],["read_rows","Reads `len` rows from the CSV into Bytes, skiping `skip` This operation has minimal CPU work and is thus the fastest way to read through a CSV without deserializing the contents to arrow."]],"struct":[["ByteRecord","A single CSV record stored as raw bytes."],["DefaultParser",""],["Reader","A already configured CSV reader."],["ReaderBuilder","Builds a CSV reader with various configuration knobs."]],"trait":[["BooleanParser","default behavior is infalible: `None` if unable to parse"],["PrimitiveParser",""],["Utf8Parser",""]]});